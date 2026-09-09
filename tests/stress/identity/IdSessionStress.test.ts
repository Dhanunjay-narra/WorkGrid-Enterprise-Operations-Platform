import { IdSessionWsHandler } from "../../../services/core-engine/src/identity/websockets/IdSessionWsHandler";
import { IdSessionSearchIndex } from "../../../services/core-engine/src/identity/search/IdSessionSearchIndex";

describe("IdSession Stress & Concurrency Load Test", () => {
  const search = new IdSessionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdSessionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
