import { IdMfaConfigWsHandler } from "../../../services/core-engine/src/identity/websockets/IdMfaConfigWsHandler";
import { IdMfaConfigSearchIndex } from "../../../services/core-engine/src/identity/search/IdMfaConfigSearchIndex";

describe("IdMfaConfig Stress & Concurrency Load Test", () => {
  const search = new IdMfaConfigSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdMfaConfigWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
