import { BiDrilldownFilterClient } from "../../../packages/sdk/src/clients/analytics/BiDrilldownFilterClient";

describe("BiDrilldownFilter SDK Client Integration Matrix", () => {
  const client = new BiDrilldownFilterClient("test-api-key");

  test("fetches single BiDrilldownFilter via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiDrilldownFilter entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
