import { HrDepartmentWsHandler } from "../../../services/core-engine/src/hr/websockets/HrDepartmentWsHandler";
import { HrDepartmentSearchIndex } from "../../../services/core-engine/src/hr/search/HrDepartmentSearchIndex";

describe("HrDepartment Stress & Concurrency Load Test", () => {
  const search = new HrDepartmentSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrDepartmentWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
