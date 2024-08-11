import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
    async getAllTasks(): Promise<Task[]> {
      try{
        return this.taskService.getAll();
      }catch(error){
        console.log('Error on showing tasks!:',error);
        return;
      }
    }

  @Query(() => Task, { nullable: true })
    async getTaskById(@Args('id', { type: () => Int }) id: number): Promise<Task> {
      try{
        return this.taskService.getById(id);
      }catch(error){
        console.log('Error on showing task:',error);
        return;
      }
    }

  @Mutation(() => Task)
    async createTask(
      @Args('title') title: string,
      @Args('description') description: string,
      @Args('status', { type: () => String }) status: string,): Promise<Task> {
      // @Args('status') status: string,
      // @Args('completed', { type: () => Boolean }) completed: boolean,): Promise<Task> {
      try{
        return this.taskService.create({ title, description, status });
      }catch(error){
        console.log('Error on creating task:',error);
        return;
      }
    }

  @Mutation(() => Task)
  async updateTask(
    @Args('id', { type: () => Int }) id: number,
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('status') status: string,
    @Args('completed', { type: () => Boolean }) completed: boolean,
  ): Promise<Task> {
    try{
      return this.taskService.update(id, { title, description, status, completed });
    }catch(error){
      console.error('Error deleting task:', error);
      return;
    }
  }

  @Mutation(() => Boolean)
  async deleteTask(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    try {
      const taskExists = await this.taskService.getById(id);
      if (!taskExists) {
        return false; // Task with the given id doesn't exist
      }
      await this.taskService.delete(id);
      return true; // Task was successfully deleted
    } catch (error) {
      console.error('Error deleting task:', error);
      return false;
    }
  }

  // @Mutation(() => Boolean)
  // async deleteTask(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
  //   await this.taskService.delete(id);
  //   return true;
  // }
}
