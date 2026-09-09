import { AiConfidenceScorecardWsHandler } from "../../../services/core-engine/src/ai/websockets/AiConfidenceScorecardWsHandler";
import { AiConfidenceScorecardSearchIndex } from "../../../services/core-engine/src/ai/search/AiConfidenceScorecardSearchIndex";

describe("AiConfidenceScorecard Stress & Concurrency Load Test", () => {
  const search = new AiConfidenceScorecardSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiConfidenceScorecardWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
