export type Heading = "North" | "East" | "South" | "West";

export interface Position {
    x: number;
    y: number;
}

export class Rover {
    constructor(
        private readonly _position: Position,
        private readonly _heading: Heading,
    ) {}

    get position(): Position {
        return this._position;
    }

    get heading(): Heading {
        return this._heading;
    }
}
