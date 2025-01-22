import { describe, expect, test } from "bun:test";

describe("add", () => {
	test("2 + 2", () => {
		expect(2 + 2).toBe(4);
	});

	test("3 + 3", () => {
		expect(3 + 3).toBe(6);
	});
});
