import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])], // Repository import.
    providers: [RestaurantResolver, RestaurantService], //서비스와 provider inject.
})
export class RestaurantsModule {}
