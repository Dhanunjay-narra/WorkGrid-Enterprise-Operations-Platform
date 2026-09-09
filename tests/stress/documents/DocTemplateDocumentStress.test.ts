import { DocTemplateDocumentWsHandler } from "../../../services/core-engine/src/documents/websockets/DocTemplateDocumentWsHandler";
import { DocTemplateDocumentSearchIndex } from "../../../services/core-engine/src/documents/search/DocTemplateDocumentSearchIndex";

describe("DocTemplateDocument Stress & Concurrency Load Test", () => {
  const search = new DocTemplateDocumentSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocTemplateDocumentWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
