import { SupArticleCategoryWsHandler } from "../../../services/core-engine/src/support/websockets/SupArticleCategoryWsHandler";
import { SupArticleCategorySearchIndex } from "../../../services/core-engine/src/support/search/SupArticleCategorySearchIndex";

describe("SupArticleCategory Stress & Concurrency Load Test", () => {
  const search = new SupArticleCategorySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupArticleCategoryWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
