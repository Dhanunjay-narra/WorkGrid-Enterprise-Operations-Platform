import { PrjEpicClient } from "../../../packages/sdk/src/clients/projects/PrjEpicClient";

describe("PrjEpic SDK Client Integration Matrix", () => {
  const client = new PrjEpicClient("test-api-key");

  test("fetches single PrjEpic via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjEpic entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
