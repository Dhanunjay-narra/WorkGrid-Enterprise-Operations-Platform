import { SecAccessReviewScheduleWsHandler } from "../../../services/core-engine/src/security/websockets/SecAccessReviewScheduleWsHandler";
import { SecAccessReviewScheduleSearchIndex } from "../../../services/core-engine/src/security/search/SecAccessReviewScheduleSearchIndex";

describe("SecAccessReviewSchedule Stress & Concurrency Load Test", () => {
  const search = new SecAccessReviewScheduleSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SecAccessReviewScheduleWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
