import { PrjIssueReportWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjIssueReportWsHandler";
import { PrjIssueReportSearchIndex } from "../../../services/core-engine/src/projects/search/PrjIssueReportSearchIndex";

describe("PrjIssueReport Stress & Concurrency Load Test", () => {
  const search = new PrjIssueReportSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjIssueReportWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
