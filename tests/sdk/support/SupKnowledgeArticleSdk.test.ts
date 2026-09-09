import { SupKnowledgeArticleClient } from "../../../packages/sdk/src/clients/support/SupKnowledgeArticleClient";

describe("SupKnowledgeArticle SDK Client Integration Matrix", () => {
  const client = new SupKnowledgeArticleClient("test-api-key");

  test("fetches single SupKnowledgeArticle via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupKnowledgeArticle entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
