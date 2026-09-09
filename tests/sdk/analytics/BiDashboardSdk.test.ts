import { BiDashboardClient } from "../../../packages/sdk/src/clients/analytics/BiDashboardClient";

describe("BiDashboard SDK Client Integration Matrix", () => {
  const client = new BiDashboardClient("test-api-key");

  test("fetches single BiDashboard via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiDashboard entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
