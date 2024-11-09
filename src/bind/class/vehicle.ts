import { inject, injectable } from "inversify";
import { IVehicle, TYPES } from "./types";


@injectable()
export class Vehicle implements IVehicle {
    private _vehicle: IVehicle;

    constructor(@inject(TYPES.Truck) Truck: IVehicle) {
        this._vehicle = Truck
    }

    drive(): void {
        this._vehicle.drive();
    }
    stop(): void {
        this._vehicle.stop()
    }
};


