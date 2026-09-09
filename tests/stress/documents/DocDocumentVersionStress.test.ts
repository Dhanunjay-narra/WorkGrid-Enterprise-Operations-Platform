import { DocDocumentVersionWsHandler } from "../../../services/core-engine/src/documents/websockets/DocDocumentVersionWsHandler";
import { DocDocumentVersionSearchIndex } from "../../../services/core-engine/src/documents/search/DocDocumentVersionSearchIndex";

describe("DocDocumentVersion Stress & Concurrency Load Test", () => {
  const search = new DocDocumentVersionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocDocumentVersionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
