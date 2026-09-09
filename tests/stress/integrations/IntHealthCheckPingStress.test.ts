import { IntHealthCheckPingWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntHealthCheckPingWsHandler";
import { IntHealthCheckPingSearchIndex } from "../../../services/core-engine/src/integrations/search/IntHealthCheckPingSearchIndex";

describe("IntHealthCheckPing Stress & Concurrency Load Test", () => {
  const search = new IntHealthCheckPingSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntHealthCheckPingWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
