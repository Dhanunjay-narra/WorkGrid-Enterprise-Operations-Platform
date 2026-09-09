import { HrTimesheetWsHandler } from "../../../services/core-engine/src/hr/websockets/HrTimesheetWsHandler";
import { HrTimesheetSearchIndex } from "../../../services/core-engine/src/hr/search/HrTimesheetSearchIndex";

describe("HrTimesheet Stress & Concurrency Load Test", () => {
  const search = new HrTimesheetSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrTimesheetWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
