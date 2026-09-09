import { HrSalaryComponentWsHandler } from "../../../services/core-engine/src/hr/websockets/HrSalaryComponentWsHandler";
import { HrSalaryComponentSearchIndex } from "../../../services/core-engine/src/hr/search/HrSalaryComponentSearchIndex";

describe("HrSalaryComponent Stress & Concurrency Load Test", () => {
  const search = new HrSalaryComponentSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrSalaryComponentWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
