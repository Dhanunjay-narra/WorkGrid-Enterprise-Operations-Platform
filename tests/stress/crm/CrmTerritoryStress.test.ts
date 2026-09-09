import { CrmTerritoryWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmTerritoryWsHandler";
import { CrmTerritorySearchIndex } from "../../../services/core-engine/src/crm/search/CrmTerritorySearchIndex";

describe("CrmTerritory Stress & Concurrency Load Test", () => {
  const search = new CrmTerritorySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmTerritoryWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
