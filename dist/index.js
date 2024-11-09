"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const vehicle_1 = require("./class/vehicle");
const container_1 = require("./container");
const VehicleClass = container_1.Container.resolve(vehicle_1.Vehicle);
VehicleClass.drive();
//# sourceMappingURL=index.js.map