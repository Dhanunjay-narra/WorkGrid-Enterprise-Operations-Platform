import { HrPerformanceReviewWsHandler } from "../../../services/core-engine/src/hr/websockets/HrPerformanceReviewWsHandler";
import { HrPerformanceReviewSearchIndex } from "../../../services/core-engine/src/hr/search/HrPerformanceReviewSearchIndex";

describe("HrPerformanceReview Stress & Concurrency Load Test", () => {
  const search = new HrPerformanceReviewSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrPerformanceReviewWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
