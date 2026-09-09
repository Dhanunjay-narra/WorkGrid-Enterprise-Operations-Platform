import { DocChunkIndexClient } from "../../../packages/sdk/src/clients/documents/DocChunkIndexClient";

describe("DocChunkIndex SDK Client Integration Matrix", () => {
  const client = new DocChunkIndexClient("test-api-key");

  test("fetches single DocChunkIndex via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocChunkIndex entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
