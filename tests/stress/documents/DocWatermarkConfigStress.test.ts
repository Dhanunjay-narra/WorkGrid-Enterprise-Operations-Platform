import { DocWatermarkConfigWsHandler } from "../../../services/core-engine/src/documents/websockets/DocWatermarkConfigWsHandler";
import { DocWatermarkConfigSearchIndex } from "../../../services/core-engine/src/documents/search/DocWatermarkConfigSearchIndex";

describe("DocWatermarkConfig Stress & Concurrency Load Test", () => {
  const search = new DocWatermarkConfigSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocWatermarkConfigWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
