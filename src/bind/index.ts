import "reflect-metadata";
import { Vehicle } from "../class/vehicle";
import { Container } from "./container";



const VehicleClass = Container.get(Vehicle);

VehicleClass.drive();