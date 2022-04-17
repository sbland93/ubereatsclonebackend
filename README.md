# uber eats clone coding



### app module
main.ts로 import 되는 유일한 모듈



### Argument -> 하나하나작성, ArgsType, Inputtype.


`// @InputType  // 하나의 묶인 Inputtype으로 활용해야 함.
@ArgsType() // 분리된 형태로 가능
export class createRestaurantDto {
    @Field(type => String) 
    name: string;
    @Field(type => Boolean) 
    isVegan: boolean;
    @Field(type => String) 
    address: string;
    @Field(type => String) 
    ownersName: string;
}
`

`
@Mutation(returns => Boolean)
    createRestaurant(
        @Args('createRestaurantInput') createRestaurantInput: createRestaurantDto
    ): boolean {
        console.log(createRestaurantInput);
        return true;
    }
`
이처럼 InputType으로 처리해주면, args에 'createRestaurantInput'이라는 텍스트를 직접 넣어줘야 함.
InputType 내부의 값을 하나하나 분리된 형태로 받아들이고 싶다며
ArgsType을 활용.

### TypeORM
-- 개인적으로 예전 프로젝트에서 sequelize ORM을 썼었는데
typescript기반으로 만들어진 TypeORM을 사용하면 좋을 것 같음.
sequelize는 node.js를 지원하지만, typeORM은 좀 더 멀티플랫폼.



### configService

`
typeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "sbland93",
      password: "test",
      database: "nubereats",
      synchronize: true, //typeorm연결시에 migration
      logging: true,
    }),
`

dotenv 를 사용한 모듈임.

`
npm i corss-env 
`
// environment linux, macos, unix 등등 알아서 맞춰주도록.


### 참고
package.json 변경시에 재시작 필요.
