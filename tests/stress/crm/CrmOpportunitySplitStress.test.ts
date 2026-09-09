import { CrmOpportunitySplitWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmOpportunitySplitWsHandler";
import { CrmOpportunitySplitSearchIndex } from "../../../services/core-engine/src/crm/search/CrmOpportunitySplitSearchIndex";

describe("CrmOpportunitySplit Stress & Concurrency Load Test", () => {
  const search = new CrmOpportunitySplitSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmOpportunitySplitWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
