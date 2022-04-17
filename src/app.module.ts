import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
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
