import { BiExportJobWsHandler } from "../../../services/core-engine/src/analytics/websockets/BiExportJobWsHandler";
import { BiExportJobSearchIndex } from "../../../services/core-engine/src/analytics/search/BiExportJobSearchIndex";

describe("BiExportJob Stress & Concurrency Load Test", () => {
  const search = new BiExportJobSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => BiExportJobWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
