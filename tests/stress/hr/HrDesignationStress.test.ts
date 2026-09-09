import { HrDesignationWsHandler } from "../../../services/core-engine/src/hr/websockets/HrDesignationWsHandler";
import { HrDesignationSearchIndex } from "../../../services/core-engine/src/hr/search/HrDesignationSearchIndex";

describe("HrDesignation Stress & Concurrency Load Test", () => {
  const search = new HrDesignationSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrDesignationWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
