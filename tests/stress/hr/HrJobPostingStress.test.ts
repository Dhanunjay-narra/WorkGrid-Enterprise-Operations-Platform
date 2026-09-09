import { HrJobPostingWsHandler } from "../../../services/core-engine/src/hr/websockets/HrJobPostingWsHandler";
import { HrJobPostingSearchIndex } from "../../../services/core-engine/src/hr/search/HrJobPostingSearchIndex";

describe("HrJobPosting Stress & Concurrency Load Test", () => {
  const search = new HrJobPostingSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrJobPostingWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
