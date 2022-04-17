import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";
// @InputType  // 하나의 묶인 Inputtype으로 활용해야 함.
@ArgsType() // 분리된 형태로 가능
export class createRestaurantDto {

    @Field(type => String)
    @IsString()
    @Length(5, 10)
    name: string;

    @Field(type => Boolean)
    @IsBoolean()
    isVegan: boolean;

    @Field(type => String) 
    @IsString()
    address: string;

    @Field(type => String) 
    @IsString()
    @Length(5, 10)
    ownersName: string;


}