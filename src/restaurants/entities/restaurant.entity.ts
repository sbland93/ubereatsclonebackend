import { Field, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class Restaurant {

    @Field(type => String) // 앞의 ()는 의미 없음. 이해하기 좋게 적으면 됨.
    name: string;
    
    @Field(type => Boolean, {nullable: true})
    isVegan?: boolean;

    @Field(type => String)
    address: string;

    @Field(type => String)
    ownerName: string;

}

