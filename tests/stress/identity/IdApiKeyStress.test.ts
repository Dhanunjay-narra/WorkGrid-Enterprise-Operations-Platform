import { IdApiKeyWsHandler } from "../../../services/core-engine/src/identity/websockets/IdApiKeyWsHandler";
import { IdApiKeySearchIndex } from "../../../services/core-engine/src/identity/search/IdApiKeySearchIndex";

describe("IdApiKey Stress & Concurrency Load Test", () => {
  const search = new IdApiKeySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdApiKeyWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
