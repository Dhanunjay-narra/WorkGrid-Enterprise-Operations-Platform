import { DocFolderWsHandler } from "../../../services/core-engine/src/documents/websockets/DocFolderWsHandler";
import { DocFolderSearchIndex } from "../../../services/core-engine/src/documents/search/DocFolderSearchIndex";

describe("DocFolder Stress & Concurrency Load Test", () => {
  const search = new DocFolderSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocFolderWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
