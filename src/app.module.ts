import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendModule } from './modules/attend/attend.module';

@Module({
  imports: [AttendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
