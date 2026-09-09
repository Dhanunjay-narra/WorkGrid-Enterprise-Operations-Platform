import { CrmSalesQuotaWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmSalesQuotaWsHandler";
import { CrmSalesQuotaSearchIndex } from "../../../services/core-engine/src/crm/search/CrmSalesQuotaSearchIndex";

describe("CrmSalesQuota Stress & Concurrency Load Test", () => {
  const search = new CrmSalesQuotaSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmSalesQuotaWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
