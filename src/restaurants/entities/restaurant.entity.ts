import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";


@InputType({isAbstract:true}) //-- Inputype도 사용 가능. abstract를 쓰는 이유는 Restaurant를 ObjectType, InputType 둘다 만들어서 오류나기 때문.
// Isabstract를 사용하면 직접적으로 사용하는 클래스가 아니라 간접적으로 사용하는 클래스라고 선언하는 것.
@ObjectType() // GraphQL Decorator
@Entity()   // Decorator를 활용해서 DB Column과 graphQL 둘다 선언 가능.
export class Restaurant {

    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number

    @Field(type => String) // 앞의 ()는 의미 없음. 이해하기 좋게 적으면 됨.
    @Column()
    @IsString()
    @Length(5)
    name: string;
    
    @Field(type => Boolean, {defaultValue: true})
    @Column({ default: true }) //db
    @IsBoolean() //for dto
    @IsOptional() //for dto
    isVegan?: boolean;

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5, 10)
    address: string;

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5, 10)
    ownerName: string;

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5, 10)
    categoryName: string;

}

