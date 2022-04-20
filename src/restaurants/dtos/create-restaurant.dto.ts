import { ArgsType, Field, InputType, OmitType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";
import { Restaurant } from "../entities/restaurant.entity";
// @InputType  // 하나의 묶인 Inputtype으로 활용해야 함.
// @InputType() // 분리된 형태로 가능
// export class CreateRestaurantDto {

//     @Field(type => String)
//     @IsString()
//     @Length(5, 10)
//     name: string;

//     @Field(type => Boolean)
//     @IsBoolean()
//     isVegan: boolean;

//     @Field(type => String) 
//     @IsString()
//     address: string;

//     @Field(type => String) 
//     @IsString()
//     @Length(5, 10)
//     ownersName: string;

// }

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ["id"]){


}