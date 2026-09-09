import { BiExecutiveSummaryClient } from "../../../packages/sdk/src/clients/analytics/BiExecutiveSummaryClient";

describe("BiExecutiveSummary SDK Client Integration Matrix", () => {
  const client = new BiExecutiveSummaryClient("test-api-key");

  test("fetches single BiExecutiveSummary via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiExecutiveSummary entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
