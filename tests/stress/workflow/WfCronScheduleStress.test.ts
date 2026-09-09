import { WfCronScheduleWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfCronScheduleWsHandler";
import { WfCronScheduleSearchIndex } from "../../../services/core-engine/src/workflow/search/WfCronScheduleSearchIndex";

describe("WfCronSchedule Stress & Concurrency Load Test", () => {
  const search = new WfCronScheduleSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfCronScheduleWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
