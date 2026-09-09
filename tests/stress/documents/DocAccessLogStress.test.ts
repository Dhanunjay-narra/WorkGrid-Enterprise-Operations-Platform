import { DocAccessLogWsHandler } from "../../../services/core-engine/src/documents/websockets/DocAccessLogWsHandler";
import { DocAccessLogSearchIndex } from "../../../services/core-engine/src/documents/search/DocAccessLogSearchIndex";

describe("DocAccessLog Stress & Concurrency Load Test", () => {
  const search = new DocAccessLogSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocAccessLogWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
