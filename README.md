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

