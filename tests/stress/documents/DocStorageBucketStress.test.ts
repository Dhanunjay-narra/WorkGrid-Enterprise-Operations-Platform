import { DocStorageBucketWsHandler } from "../../../services/core-engine/src/documents/websockets/DocStorageBucketWsHandler";
import { DocStorageBucketSearchIndex } from "../../../services/core-engine/src/documents/search/DocStorageBucketSearchIndex";

describe("DocStorageBucket Stress & Concurrency Load Test", () => {
  const search = new DocStorageBucketSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocStorageBucketWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
