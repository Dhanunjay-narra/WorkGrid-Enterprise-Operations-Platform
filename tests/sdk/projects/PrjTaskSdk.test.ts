import { PrjTaskClient } from "../../../packages/sdk/src/clients/projects/PrjTaskClient";

describe("PrjTask SDK Client Integration Matrix", () => {
  const client = new PrjTaskClient("test-api-key");

  test("fetches single PrjTask via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjTask entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
