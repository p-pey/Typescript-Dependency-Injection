import "reflect-metadata";
import { Vehicle } from "./bind/class/vehicle";
import { Container } from "./bind/container";



const VehicleClass = Container.resolve(Vehicle);

VehicleClass.drive();