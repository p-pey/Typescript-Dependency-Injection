import { Container as DIContainer } from "inversify";
import { Car } from "./class/car";
import { Motor } from "./class/motor";
import { Truck } from "./class/truck";
import { TYPES } from "./class/types";
import { Vehicle } from "./class/vehicle";


export const Container = new DIContainer();


Container.bind<Vehicle>(TYPES.Vehicle).to(Vehicle);
Container.bind<Motor>(TYPES.Motor).to(Motor);
Container.bind<Car>(TYPES.Car).to(Car);
Container.bind<Truck>(TYPES.Truck).to(Truck);