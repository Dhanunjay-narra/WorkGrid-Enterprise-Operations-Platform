import { DocRetentionScheduleWsHandler } from "../../../services/core-engine/src/documents/websockets/DocRetentionScheduleWsHandler";
import { DocRetentionScheduleSearchIndex } from "../../../services/core-engine/src/documents/search/DocRetentionScheduleSearchIndex";

describe("DocRetentionSchedule Stress & Concurrency Load Test", () => {
  const search = new DocRetentionScheduleSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocRetentionScheduleWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
