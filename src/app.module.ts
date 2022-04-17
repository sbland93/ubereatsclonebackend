import { Module } from '@nestjs/common';
import * as Joi from 'joi'; // js나 nestjs로 되어있지 않은 패키지를 import 하는 방법.
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 어디서든 접근 가능하도록 할 것인지
      envFilePath: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.test",
      ignoreEnvFile: process.env.NODE_ENV === "prod",
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod'), //유효성 검증.
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      host:process.env.DB_HOST,
      port: +process.env.DB_PORT, //+"123123" string으로 변경
      username:process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_NAME,
      type: "postgres",
      synchronize: true, //typeorm연결시에 migration
      logging: true,
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,                                     // 메모리에 생성
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // file 직접 생성
    }),
    RestaurantsModule // root Module from graphQLModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
