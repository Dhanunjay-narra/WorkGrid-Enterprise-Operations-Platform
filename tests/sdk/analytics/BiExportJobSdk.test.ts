import { BiExportJobClient } from "../../../packages/sdk/src/clients/analytics/BiExportJobClient";

describe("BiExportJob SDK Client Integration Matrix", () => {
  const client = new BiExportJobClient("test-api-key");

  test("fetches single BiExportJob via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiExportJob entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
