import { BiAnomalyThresholdClient } from "../../../packages/sdk/src/clients/analytics/BiAnomalyThresholdClient";

describe("BiAnomalyThreshold SDK Client Integration Matrix", () => {
  const client = new BiAnomalyThresholdClient("test-api-key");

  test("fetches single BiAnomalyThreshold via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiAnomalyThreshold entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
