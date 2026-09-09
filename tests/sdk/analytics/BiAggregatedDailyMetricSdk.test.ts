import { BiAggregatedDailyMetricClient } from "../../../packages/sdk/src/clients/analytics/BiAggregatedDailyMetricClient";

describe("BiAggregatedDailyMetric SDK Client Integration Matrix", () => {
  const client = new BiAggregatedDailyMetricClient("test-api-key");

  test("fetches single BiAggregatedDailyMetric via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiAggregatedDailyMetric entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
