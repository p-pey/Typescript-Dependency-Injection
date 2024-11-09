import "reflect-metadata";
import { Vehicle } from "../class/vehicle";
import { Container } from "./container";



const VehicleClass = Container.resolve(Vehicle);

VehicleClass.drive();