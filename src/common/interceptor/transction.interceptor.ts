import {
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, tap } from 'rxjs';
import { DataSource } from 'typeorm';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor(private readonly dataSource: DataSource) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();

    // 트랜잭션을 담당할 러너 생성
    const qr = this.dataSource.createQueryRunner();

    // 쿼리러너에 연결하는 지점
    await qr.connect();

    // 쿼리 러너에서 트랜젝션을 시작 하는 지점
    await qr.startTransaction();

    // 요청의 쿼리 러너에 생성한 쿼리러너를 할당
    req.queryRunner = qr;

    return next.handle().pipe(
      catchError(async (e) => {
        await qr.rollbackTransaction();
        await qr.release();

        throw new InternalServerErrorException(
          `${e.message} 에러가 발생했습니다.`,
        );
      }),
      tap(async () => {
        await qr.commitTransaction();
        await qr.release();
      }),
    );
  }
}
