import { BiReportQueryClient } from "../../../packages/sdk/src/clients/analytics/BiReportQueryClient";

describe("BiReportQuery SDK Client Integration Matrix", () => {
  const client = new BiReportQueryClient("test-api-key");

  test("fetches single BiReportQuery via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiReportQuery entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
