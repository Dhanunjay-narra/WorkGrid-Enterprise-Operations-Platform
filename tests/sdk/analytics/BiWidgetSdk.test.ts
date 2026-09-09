import { BiWidgetClient } from "../../../packages/sdk/src/clients/analytics/BiWidgetClient";

describe("BiWidget SDK Client Integration Matrix", () => {
  const client = new BiWidgetClient("test-api-key");

  test("fetches single BiWidget via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiWidget entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
