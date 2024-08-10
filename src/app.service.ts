import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome!, This is Task Management App.';
  }
}



// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Task } from './task/task.entity';

// @Injectable()
// export class AppService {
//   constructor(
//     @InjectRepository(Task)
//     private taskRepository: Repository<Task>,
//   ) {}

//   async getHello(): Promise<string> {
//     // Check the database connection
//     try {
//       // Fetch the first task from the database
//       const firstTask = await this.taskRepository.createQueryBuilder('task')
//         .orderBy('task.id', 'ASC')
//         .limit(1)
//         .getOne();
//       console.log('Database connection is successful');
//     } catch (error) {
//       console.error('Error connecting to the database:', error);
//     }

//     return 'Welcome!, This is Task Management App.';
//   }
// }



// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Task } from './tasks/tasks.entity';

// @Injectable()
// export class AppService {
//   constructor(
//     @InjectRepository(Task)
//     private taskRepository: Repository<Task>,
//   ) {}

//   async createTask(title: string, description: string): Promise<Task> {
//     const task = this.taskRepository.create({ title, description });
//     return this.taskRepository.save(task);
//   }

//   async getTasks(): Promise<Task[]> {
//     return this.taskRepository.find();
//   }

//   async getTaskById(id: number): Promise<Task> {
//     return this.taskRepository.findOneBy({ id });
//   }

//   async updateTask(id: number, title: string, description: string): Promise<Task> {
//     const task = await this.getTaskById(id);
//     task.title = title;
//     task.description = description;
//     return this.taskRepository.save(task);
//   }

//   async deleteTask(id: number): Promise<void> {
//     await this.taskRepository.delete(id);
//   }
// }
