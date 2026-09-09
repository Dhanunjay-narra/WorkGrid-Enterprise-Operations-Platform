import { CrmDealWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmDealWsHandler";
import { CrmDealSearchIndex } from "../../../services/core-engine/src/crm/search/CrmDealSearchIndex";

describe("CrmDeal Stress & Concurrency Load Test", () => {
  const search = new CrmDealSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmDealWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
