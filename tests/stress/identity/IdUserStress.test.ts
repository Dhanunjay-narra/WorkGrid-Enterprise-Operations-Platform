import { IdUserWsHandler } from "../../../services/core-engine/src/identity/websockets/IdUserWsHandler";
import { IdUserSearchIndex } from "../../../services/core-engine/src/identity/search/IdUserSearchIndex";

describe("IdUser Stress & Concurrency Load Test", () => {
  const search = new IdUserSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdUserWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
