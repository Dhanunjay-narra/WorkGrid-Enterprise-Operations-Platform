import { HrShiftWsHandler } from "../../../services/core-engine/src/hr/websockets/HrShiftWsHandler";
import { HrShiftSearchIndex } from "../../../services/core-engine/src/hr/search/HrShiftSearchIndex";

describe("HrShift Stress & Concurrency Load Test", () => {
  const search = new HrShiftSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrShiftWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
