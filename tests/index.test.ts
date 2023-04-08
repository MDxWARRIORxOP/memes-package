import { describe, expect, test } from "@jest/globals";
import { getMeme } from "../src/index";

describe("Testing the one and only getMeme function", () => {
  test("Should work.", async () => {
    expect(await getMeme({ sfw: true })).toHaveProperty("nsfw", false);
    expect(await getMeme({ sfw: true })).toHaveProperty("image");
    expect(await getMeme({ sfw: true })).toHaveProperty("author");
    expect(await getMeme({ sfw: true })).toHaveProperty("title");
  }, 8000);
});
