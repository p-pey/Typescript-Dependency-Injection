import { injectable } from "inversify";
import { IVehicle } from "./types";

@injectable()
export class Motor implements IVehicle {

    drive(): void {
        console.log("Driving Motor ...");
    };
    stop(): void {
        console.log("Stop Motor...");
    }
};