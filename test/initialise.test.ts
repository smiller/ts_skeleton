import { strict as assert } from "assert";
import { Rover } from "../src/rover";

describe("Initialising the Mars Rover", () => {
    // When the rover is initialised at position (2, 3) facing North
    let rover: Rover;
    beforeEach(() => {
        rover = new Rover({ x: 2, y: 3 }, "North");
    });

    it("reports the position it was initialised at", () => {
        // Then the rover position should be (2, 3)
        assert.deepEqual(rover.position, { x: 2, y: 3 });
    });

    it("reports the heading it was initialised with", () => {
        // And the rover heading should be North
        assert.equal(rover.heading, "North");
    });
});
