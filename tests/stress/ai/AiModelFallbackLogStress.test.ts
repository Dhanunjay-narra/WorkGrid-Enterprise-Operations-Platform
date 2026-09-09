import { AiModelFallbackLogWsHandler } from "../../../services/core-engine/src/ai/websockets/AiModelFallbackLogWsHandler";
import { AiModelFallbackLogSearchIndex } from "../../../services/core-engine/src/ai/search/AiModelFallbackLogSearchIndex";

describe("AiModelFallbackLog Stress & Concurrency Load Test", () => {
  const search = new AiModelFallbackLogSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiModelFallbackLogWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
