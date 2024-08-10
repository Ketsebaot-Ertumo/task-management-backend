// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes();

    app.use('/graphql', (req, res, next) => {
      if (req.method === 'GET') {
        req.body = { query: req.query.query };
      }
      next();
    });
    await app.listen(4000);
    console.log('Connected to database');
  } catch (error) {
    console.error('Unable to connect to database:', error);
  }
}

bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { Logger } from '@nestjs/common';
// import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Get the TypeOrmModuleOptions instance
//   const typeOrmOptions = await app.get<TypeOrmModuleOptions>(TypeOrmModule);

//   // Check the database connection status
//   if (typeOrmOptions.type === 'postgres') {
//     try {
//       await typeOrmOptions.driver.connect();
//       Logger.log(`Database connected on port: ${typeOrmOptions.port}`, 'DatabaseConnection');
//     } catch (error) {
//       Logger.error('Unable to connect with database', error, 'DatabaseConnection');
//     }
//   }

//   await app.listen(4000);
// }
// bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   // try {
//   //   await app.get(TypeOrmModule).connect();
//   //   console.log('Database connected on port:', process.env.DB_PORT);
//   // } catch (error) {
//   //   console.error('Unable to connect with database:', error);
//   // }

//   await app.listen(8000);
// }
// bootstrap();
