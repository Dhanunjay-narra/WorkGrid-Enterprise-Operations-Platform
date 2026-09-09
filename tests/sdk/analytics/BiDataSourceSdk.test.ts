import { BiDataSourceClient } from "../../../packages/sdk/src/clients/analytics/BiDataSourceClient";

describe("BiDataSource SDK Client Integration Matrix", () => {
  const client = new BiDataSourceClient("test-api-key");

  test("fetches single BiDataSource via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiDataSource entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
