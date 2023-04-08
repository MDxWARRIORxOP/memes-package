import { getMeme } from "../src/index";

describe("Testing the one and only getMeme function", () => {
  test("Should work.", async () => {
    expect(await getMeme({ sfw: true })).toHaveProperty("nsfw", false);
  }, 2000);
});
