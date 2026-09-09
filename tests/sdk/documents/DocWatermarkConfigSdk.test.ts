import { DocWatermarkConfigClient } from "../../../packages/sdk/src/clients/documents/DocWatermarkConfigClient";

describe("DocWatermarkConfig SDK Client Integration Matrix", () => {
  const client = new DocWatermarkConfigClient("test-api-key");

  test("fetches single DocWatermarkConfig via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocWatermarkConfig entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
