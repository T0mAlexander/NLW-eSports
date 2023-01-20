"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertHourMin(hour) {
    const [hours, min] = hour.split(':').map(Number);
    const minAmount = hours * 60 + min;
    return minAmount;
}
exports.default = convertHourMin;
