import { DocMetadataTagClient } from "../../../packages/sdk/src/clients/documents/DocMetadataTagClient";

describe("DocMetadataTag SDK Client Integration Matrix", () => {
  const client = new DocMetadataTagClient("test-api-key");

  test("fetches single DocMetadataTag via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocMetadataTag entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
