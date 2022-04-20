import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { UpdateRestaurantDto } from "./dtos/update-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";

@Injectable()
export class RestaurantService {
    
    // restaurnat의 Repository를 넣어줌.
    constructor(@InjectRepository(Restaurant) 
    private readonly restaurants: Repository<Restaurant>){}


    getAll() : Promise<Restaurant[]>{
        return this.restaurants.find(); //여기서 restaurant는 Restaurant의 repository이다.
    }


    createRestaurant (createRestaurantDto: CreateRestaurantDto) : Promise<Restaurant> {
        
        const newRestaurant = this.restaurants.create(
            createRestaurantDto
        ); // nestjs의 장점. object를 충분히 신뢰할 수 있음.

        return this.restaurants.save(newRestaurant);

    }

    updateRestaurant({id, data}: UpdateRestaurantDto) {
        return this.restaurants.update(id,{...data})
    }


}