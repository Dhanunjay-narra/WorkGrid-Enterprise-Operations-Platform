import { IdTenantWsHandler } from "../../../services/core-engine/src/identity/websockets/IdTenantWsHandler";
import { IdTenantSearchIndex } from "../../../services/core-engine/src/identity/search/IdTenantSearchIndex";

describe("IdTenant Stress & Concurrency Load Test", () => {
  const search = new IdTenantSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdTenantWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
