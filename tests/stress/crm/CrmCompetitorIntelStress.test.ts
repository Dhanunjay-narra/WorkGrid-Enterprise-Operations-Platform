import { CrmCompetitorIntelWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmCompetitorIntelWsHandler";
import { CrmCompetitorIntelSearchIndex } from "../../../services/core-engine/src/crm/search/CrmCompetitorIntelSearchIndex";

describe("CrmCompetitorIntel Stress & Concurrency Load Test", () => {
  const search = new CrmCompetitorIntelSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmCompetitorIntelWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
