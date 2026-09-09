import { IdSsoConfigWsHandler } from "../../../services/core-engine/src/identity/websockets/IdSsoConfigWsHandler";
import { IdSsoConfigSearchIndex } from "../../../services/core-engine/src/identity/search/IdSsoConfigSearchIndex";

describe("IdSsoConfig Stress & Concurrency Load Test", () => {
  const search = new IdSsoConfigSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdSsoConfigWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
