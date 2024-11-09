export abstract class IVehicle {
    abstract drive(): void;
    abstract stop(): void;
};


export const TYPES = {
    Vehicle: Symbol.for("Vehicle"),
    Motor: Symbol.for("Motor"),
    Car: Symbol.for("Car"),
    Truck: Symbol.for("Truck")
} as const; 