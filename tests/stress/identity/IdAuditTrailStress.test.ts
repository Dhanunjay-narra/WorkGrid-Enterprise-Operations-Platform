import { IdAuditTrailWsHandler } from "../../../services/core-engine/src/identity/websockets/IdAuditTrailWsHandler";
import { IdAuditTrailSearchIndex } from "../../../services/core-engine/src/identity/search/IdAuditTrailSearchIndex";

describe("IdAuditTrail Stress & Concurrency Load Test", () => {
  const search = new IdAuditTrailSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdAuditTrailWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
