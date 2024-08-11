import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async getAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getById(id: number): Promise<Task> {
    return this.taskRepository.findOneBy({ id });
  }

  async create(task: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    await this.taskRepository.update(id, task);
    return this.taskRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}




// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Task } from './task.entity';

// @Injectable()
// export class TaskService {
//   constructor(
//     @InjectRepository(Task)
//     private readonly taskRepository: Repository<Task>,
//   ) {}

//   getAll(): Promise<Task[]> {
//     return this.taskRepository.find();
//   }
// async remove(id: number): Promise<void> {
  //     await this.taskRepository.delete(id);
  //   }
// }