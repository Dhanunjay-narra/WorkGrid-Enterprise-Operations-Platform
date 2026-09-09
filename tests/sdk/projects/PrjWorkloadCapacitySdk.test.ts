import { PrjWorkloadCapacityClient } from "../../../packages/sdk/src/clients/projects/PrjWorkloadCapacityClient";

describe("PrjWorkloadCapacity SDK Client Integration Matrix", () => {
  const client = new PrjWorkloadCapacityClient("test-api-key");

  test("fetches single PrjWorkloadCapacity via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjWorkloadCapacity entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
