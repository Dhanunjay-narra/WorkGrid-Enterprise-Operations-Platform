import { DocDocumentSignatureWsHandler } from "../../../services/core-engine/src/documents/websockets/DocDocumentSignatureWsHandler";
import { DocDocumentSignatureSearchIndex } from "../../../services/core-engine/src/documents/search/DocDocumentSignatureSearchIndex";

describe("DocDocumentSignature Stress & Concurrency Load Test", () => {
  const search = new DocDocumentSignatureSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocDocumentSignatureWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
