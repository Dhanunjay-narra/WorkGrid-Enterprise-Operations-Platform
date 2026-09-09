import { AiDocumentChunkClient } from "../../../packages/sdk/src/clients/ai/AiDocumentChunkClient";

describe("AiDocumentChunk SDK Client Integration Matrix", () => {
  const client = new AiDocumentChunkClient("test-api-key");

  test("fetches single AiDocumentChunk via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiDocumentChunk entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
