

import { injectable } from "inversify";
import { IVehicle } from "./types";

@injectable()
export class Car implements IVehicle {
    drive(): void {
        console.log("Driving Car...");
    };
    stop(): void {
        console.log("Stop Car...");
    }
};