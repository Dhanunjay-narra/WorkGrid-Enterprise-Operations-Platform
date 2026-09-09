import { IdDirectorySyncWsHandler } from "../../../services/core-engine/src/identity/websockets/IdDirectorySyncWsHandler";
import { IdDirectorySyncSearchIndex } from "../../../services/core-engine/src/identity/search/IdDirectorySyncSearchIndex";

describe("IdDirectorySync Stress & Concurrency Load Test", () => {
  const search = new IdDirectorySyncSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdDirectorySyncWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
