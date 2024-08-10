import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
    async GetAllTasks(): Promise<Task[]> {
      return this.taskService.GetAll();
    }

  @Query(() => Task, { nullable: true })
    async GetTaskById(@Args('id', { type: () => Int }) id: number): Promise<Task> {
      return this.taskService.GetById(id);
    }

  @Mutation(() => Task)
    async createTask(
      @Args('title') title: string,
      @Args('description') description: string,
      @Args('status') status: string,
      @Args('completed', { type: () => Boolean }) completed: boolean,): Promise<Task> {
        return this.taskService.create({ title, description, status, completed });
      }

  @Mutation(() => Task)
  async updateTask(
    @Args('id', { type: () => Int }) id: number,
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('status') status: string,
    @Args('completed', { type: () => Boolean }) completed: boolean,
  ): Promise<Task> {
    return this.taskService.update(id, { title, description, status, completed });
  }

  @Mutation(() => Boolean)
  async deleteTask(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    await this.taskService.remove(id);
    return true;
  }
}
