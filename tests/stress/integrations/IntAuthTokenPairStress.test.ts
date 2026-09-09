import { IntAuthTokenPairWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntAuthTokenPairWsHandler";
import { IntAuthTokenPairSearchIndex } from "../../../services/core-engine/src/integrations/search/IntAuthTokenPairSearchIndex";

describe("IntAuthTokenPair Stress & Concurrency Load Test", () => {
  const search = new IntAuthTokenPairSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntAuthTokenPairWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
