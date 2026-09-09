import { DocOcrExtractedDataWsHandler } from "../../../services/core-engine/src/documents/websockets/DocOcrExtractedDataWsHandler";
import { DocOcrExtractedDataSearchIndex } from "../../../services/core-engine/src/documents/search/DocOcrExtractedDataSearchIndex";

describe("DocOcrExtractedData Stress & Concurrency Load Test", () => {
  const search = new DocOcrExtractedDataSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocOcrExtractedDataWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
