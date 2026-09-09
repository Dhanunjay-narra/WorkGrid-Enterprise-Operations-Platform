import { PrjProjectHealthMetricClient } from "../../../packages/sdk/src/clients/projects/PrjProjectHealthMetricClient";

describe("PrjProjectHealthMetric SDK Client Integration Matrix", () => {
  const client = new PrjProjectHealthMetricClient("test-api-key");

  test("fetches single PrjProjectHealthMetric via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjProjectHealthMetric entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
