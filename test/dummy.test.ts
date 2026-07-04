import "mocha"
import { strict as assert } from "assert";
import {describe, it} from "node:test";

describe("dummy", () => {
    it("should pass", () => {
        assert.equal(true, true);
    });
});