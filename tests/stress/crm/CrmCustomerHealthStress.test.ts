import { CrmCustomerHealthWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmCustomerHealthWsHandler";
import { CrmCustomerHealthSearchIndex } from "../../../services/core-engine/src/crm/search/CrmCustomerHealthSearchIndex";

describe("CrmCustomerHealth Stress & Concurrency Load Test", () => {
  const search = new CrmCustomerHealthSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmCustomerHealthWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
