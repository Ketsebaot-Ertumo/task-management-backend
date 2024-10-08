import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { Task } from './task.entity';
// import { TaskController } from './task.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskService, TaskResolver],
  // controllers: [TaskController],
  // exports: [TaskService],
})
export class TaskModule {}
