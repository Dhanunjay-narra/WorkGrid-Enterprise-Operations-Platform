import { AiEvaluationScoreWsHandler } from "../../../services/core-engine/src/ai/websockets/AiEvaluationScoreWsHandler";
import { AiEvaluationScoreSearchIndex } from "../../../services/core-engine/src/ai/search/AiEvaluationScoreSearchIndex";

describe("AiEvaluationScore Stress & Concurrency Load Test", () => {
  const search = new AiEvaluationScoreSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiEvaluationScoreWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
