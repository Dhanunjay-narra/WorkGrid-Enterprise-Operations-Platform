import { AiPromptTemplateWsHandler } from "../../../services/core-engine/src/ai/websockets/AiPromptTemplateWsHandler";
import { AiPromptTemplateSearchIndex } from "../../../services/core-engine/src/ai/search/AiPromptTemplateSearchIndex";

describe("AiPromptTemplate Stress & Concurrency Load Test", () => {
  const search = new AiPromptTemplateSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiPromptTemplateWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
