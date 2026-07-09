export type Heading = "North" | "East" | "South" | "West";

export interface Position {
    x: number;
    y: number;
}

export class Rover {
    constructor(position: Position, heading: Heading) {}

    get position(): Position {
        return { x: 0, y: 0 };
    }

    get heading(): Heading {
        return "South";
    }
}
