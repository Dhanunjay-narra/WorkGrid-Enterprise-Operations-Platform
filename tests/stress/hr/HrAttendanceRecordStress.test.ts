import { HrAttendanceRecordWsHandler } from "../../../services/core-engine/src/hr/websockets/HrAttendanceRecordWsHandler";
import { HrAttendanceRecordSearchIndex } from "../../../services/core-engine/src/hr/search/HrAttendanceRecordSearchIndex";

describe("HrAttendanceRecord Stress & Concurrency Load Test", () => {
  const search = new HrAttendanceRecordSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrAttendanceRecordWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
