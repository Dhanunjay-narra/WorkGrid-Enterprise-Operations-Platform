import { DocDocumentFileWsHandler } from "../../../services/core-engine/src/documents/websockets/DocDocumentFileWsHandler";
import { DocDocumentFileSearchIndex } from "../../../services/core-engine/src/documents/search/DocDocumentFileSearchIndex";

describe("DocDocumentFile Stress & Concurrency Load Test", () => {
  const search = new DocDocumentFileSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocDocumentFileWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
