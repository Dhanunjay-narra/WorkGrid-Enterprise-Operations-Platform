import { AiVectorEmbeddingClient } from "../../../packages/sdk/src/clients/ai/AiVectorEmbeddingClient";

describe("AiVectorEmbedding SDK Client Integration Matrix", () => {
  const client = new AiVectorEmbeddingClient("test-api-key");

  test("fetches single AiVectorEmbedding via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiVectorEmbedding entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
