"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const rover_1 = require("../src/rover");
describe("Initialising the Mars Rover", () => {
    // When the rover is initialised at position (2, 3) facing North
    let rover;
    beforeEach(() => {
        rover = new rover_1.Rover({ x: 2, y: 3 }, "North");
    });
    it("reports the position it was initialised at", () => {
        // Then the rover position should be (2, 3)
        assert_1.strict.deepEqual(rover.position, { x: 2, y: 3 });
    });
    it("reports the heading it was initialised with", () => {
        // And the rover heading should be North
        assert_1.strict.equal(rover.heading, "North");
    });
});
