import { HrPayrollSlipWsHandler } from "../../../services/core-engine/src/hr/websockets/HrPayrollSlipWsHandler";
import { HrPayrollSlipSearchIndex } from "../../../services/core-engine/src/hr/search/HrPayrollSlipSearchIndex";

describe("HrPayrollSlip Stress & Concurrency Load Test", () => {
  const search = new HrPayrollSlipSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrPayrollSlipWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
