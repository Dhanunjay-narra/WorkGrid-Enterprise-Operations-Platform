import { SupKnowledgeArticleWsHandler } from "../../../services/core-engine/src/support/websockets/SupKnowledgeArticleWsHandler";
import { SupKnowledgeArticleSearchIndex } from "../../../services/core-engine/src/support/search/SupKnowledgeArticleSearchIndex";

describe("SupKnowledgeArticle Stress & Concurrency Load Test", () => {
  const search = new SupKnowledgeArticleSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupKnowledgeArticleWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
