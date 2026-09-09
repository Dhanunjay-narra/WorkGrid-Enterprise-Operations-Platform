import { HrLeaveRequestWsHandler } from "../../../services/core-engine/src/hr/websockets/HrLeaveRequestWsHandler";
import { HrLeaveRequestSearchIndex } from "../../../services/core-engine/src/hr/search/HrLeaveRequestSearchIndex";

describe("HrLeaveRequest Stress & Concurrency Load Test", () => {
  const search = new HrLeaveRequestSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrLeaveRequestWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
