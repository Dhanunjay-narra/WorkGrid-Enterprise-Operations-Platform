import { HrCandidateWsHandler } from "../../../services/core-engine/src/hr/websockets/HrCandidateWsHandler";
import { HrCandidateSearchIndex } from "../../../services/core-engine/src/hr/search/HrCandidateSearchIndex";

describe("HrCandidate Stress & Concurrency Load Test", () => {
  const search = new HrCandidateSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrCandidateWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
