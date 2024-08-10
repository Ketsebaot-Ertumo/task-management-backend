import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TaskModule } from './task/task.modules';
import { DatabaseModule } from './db/db.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      playground: true,
    }),
    TaskModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// // import { TaskResolver } from './task/task.resolver';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   // providers: [AppService, TaskResolver],
//   providers: [AppService],
// })
// export class AppModule {}



// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { DatabaseModule } from './db/db.module';
// import { TasksModule } from './tasks/tasks.module';
// import { TaskResolver } from './task/task.resolver';

// @Module({
//   imports: [DatabaseModule, TasksModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
