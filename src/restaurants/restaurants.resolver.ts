
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { create } from "domain";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { UpdateRestaurantDto } from "./dtos/update-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "./restaurants.service";



@Resolver(of => Restaurant)
export class RestaurantResolver {
    
    constructor(private readonly restaurantService: RestaurantService) {} //injection을 통해 활용.

    @Query(returns => Boolean) // 여기 리턴타입은 graphQL을 위함.
    isPizzaGood() : Boolean{ // 여기 리턴타입은 typescript를 위함.
        return true;
    }

    @Query(returns => Restaurant)
    myRestaurant() {
        return true;
    }

    @Query(returns => [Restaurant]) // [Restaurant]를 리턴하는 쿼리 typescript와 array표현 차이있음 확인.
    restaurants(): Promise<Restaurant[]> { 
        return this.restaurantService.getAll();
    }


    @Mutation(returns => Boolean)
    async createRestaurant(
        @Args('input') createRestaurantDto: CreateRestaurantDto
    ): Promise<boolean> {
        console.log(createRestaurantDto);
        try {
            await this.restaurantService.createRestaurant(createRestaurantDto);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async updateRestaurant(
        @Args('input') updateRestaurantDto: UpdateRestaurantDto,
    ) : Promise<boolean> {
        try{
            await this.restaurantService.updateRestaurant(updateRestaurantDto);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }

}