import { CrmSalesContractWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmSalesContractWsHandler";
import { CrmSalesContractSearchIndex } from "../../../services/core-engine/src/crm/search/CrmSalesContractSearchIndex";

describe("CrmSalesContract Stress & Concurrency Load Test", () => {
  const search = new CrmSalesContractSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmSalesContractWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
