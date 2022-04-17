
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createRestaurantDto } from "./dtos/create-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";



@Resolver(of => Restaurant)
export class RestaurantResolver {
    
    @Query(returns => Boolean) // 여기 리턴타입은 graphQL을 위함.
    isPizzaGood() : Boolean{ // 여기 리턴타입은 typescript를 위함.
        return true;
    }

    @Query(returns => Restaurant)
    myRestaurant() {
        return true;
    }

    @Query(returns => [Restaurant]) // [Restaurant]를 리턴하는 쿼리 typescript와 array표현 차이있음 확인.
    restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] { 
        console.log('veganOnly' , veganOnly);
        return [];
    }


    @Mutation(returns => Boolean)
    createRestaurant(
        @Args() createRestaurantDto: createRestaurantDto
    ): boolean {
        console.log(createRestaurantDto);
        return true;
    }

}