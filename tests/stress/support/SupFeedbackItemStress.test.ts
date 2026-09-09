import { SupFeedbackItemWsHandler } from "../../../services/core-engine/src/support/websockets/SupFeedbackItemWsHandler";
import { SupFeedbackItemSearchIndex } from "../../../services/core-engine/src/support/search/SupFeedbackItemSearchIndex";

describe("SupFeedbackItem Stress & Concurrency Load Test", () => {
  const search = new SupFeedbackItemSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupFeedbackItemWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
