import { CrmLeadWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmLeadWsHandler";
import { CrmLeadSearchIndex } from "../../../services/core-engine/src/crm/search/CrmLeadSearchIndex";

describe("CrmLead Stress & Concurrency Load Test", () => {
  const search = new CrmLeadSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmLeadWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
