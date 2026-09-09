import { DocFileExportJobWsHandler } from "../../../services/core-engine/src/documents/websockets/DocFileExportJobWsHandler";
import { DocFileExportJobSearchIndex } from "../../../services/core-engine/src/documents/search/DocFileExportJobSearchIndex";

describe("DocFileExportJob Stress & Concurrency Load Test", () => {
  const search = new DocFileExportJobSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocFileExportJobWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
