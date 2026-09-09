import { IntOAuthConnectionWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntOAuthConnectionWsHandler";
import { IntOAuthConnectionSearchIndex } from "../../../services/core-engine/src/integrations/search/IntOAuthConnectionSearchIndex";

describe("IntOAuthConnection Stress & Concurrency Load Test", () => {
  const search = new IntOAuthConnectionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntOAuthConnectionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
