import { PrjWorkloadCapacityWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjWorkloadCapacityWsHandler";
import { PrjWorkloadCapacitySearchIndex } from "../../../services/core-engine/src/projects/search/PrjWorkloadCapacitySearchIndex";

describe("PrjWorkloadCapacity Stress & Concurrency Load Test", () => {
  const search = new PrjWorkloadCapacitySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjWorkloadCapacityWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
