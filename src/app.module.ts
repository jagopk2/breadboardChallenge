import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumModule } from './sum/sum.module';

@Module({
  imports: [SumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
