import { DocChunkIndexWsHandler } from "../../../services/core-engine/src/documents/websockets/DocChunkIndexWsHandler";
import { DocChunkIndexSearchIndex } from "../../../services/core-engine/src/documents/search/DocChunkIndexSearchIndex";

describe("DocChunkIndex Stress & Concurrency Load Test", () => {
  const search = new DocChunkIndexSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocChunkIndexWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
