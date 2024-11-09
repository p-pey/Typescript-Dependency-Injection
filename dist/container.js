"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const inversify_1 = require("inversify");
const car_1 = require("./class/car");
const motor_1 = require("./class/motor");
const truck_1 = require("./class/truck");
const types_1 = require("./class/types");
const vehicle_1 = require("./class/vehicle");
exports.Container = new inversify_1.Container();
exports.Container.bind(types_1.TYPES.Vehicle).to(vehicle_1.Vehicle);
exports.Container.bind(types_1.TYPES.Motor).to(motor_1.Motor);
exports.Container.bind(types_1.TYPES.Car).to(car_1.Car);
exports.Container.bind(types_1.TYPES.Truck).to(truck_1.Truck);
//# sourceMappingURL=container.js.map