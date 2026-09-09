import { BiKpiMetricClient } from "../../../packages/sdk/src/clients/analytics/BiKpiMetricClient";

describe("BiKpiMetric SDK Client Integration Matrix", () => {
  const client = new BiKpiMetricClient("test-api-key");

  test("fetches single BiKpiMetric via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiKpiMetric entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
