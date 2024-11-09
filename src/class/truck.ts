import { injectable } from "inversify";
import { IVehicle } from "./types";

@injectable()
export class Truck implements IVehicle {
    drive(): void {
        console.log("Driving Truck ...")
    }
    stop(): void {
        console.log("Stop Truck ...");
    }
}