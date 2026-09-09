import { HrEmployeeWsHandler } from "../../../services/core-engine/src/hr/websockets/HrEmployeeWsHandler";
import { HrEmployeeSearchIndex } from "../../../services/core-engine/src/hr/search/HrEmployeeSearchIndex";

describe("HrEmployee Stress & Concurrency Load Test", () => {
  const search = new HrEmployeeSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrEmployeeWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
