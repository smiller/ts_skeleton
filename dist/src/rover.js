"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
class Rover {
    _position;
    _heading;
    constructor(_position, _heading) {
        this._position = _position;
        this._heading = _heading;
    }
    get position() {
        return this._position;
    }
    get heading() {
        return this._heading;
    }
}
exports.Rover = Rover;
