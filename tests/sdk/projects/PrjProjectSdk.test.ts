import { PrjProjectClient } from "../../../packages/sdk/src/clients/projects/PrjProjectClient";

describe("PrjProject SDK Client Integration Matrix", () => {
  const client = new PrjProjectClient("test-api-key");

  test("fetches single PrjProject via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjProject entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
