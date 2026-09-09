import { DocMetadataTagWsHandler } from "../../../services/core-engine/src/documents/websockets/DocMetadataTagWsHandler";
import { DocMetadataTagSearchIndex } from "../../../services/core-engine/src/documents/search/DocMetadataTagSearchIndex";

describe("DocMetadataTag Stress & Concurrency Load Test", () => {
  const search = new DocMetadataTagSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocMetadataTagWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
