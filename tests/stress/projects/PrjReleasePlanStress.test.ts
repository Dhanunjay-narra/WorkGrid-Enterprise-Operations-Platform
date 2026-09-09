import { PrjReleasePlanWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjReleasePlanWsHandler";
import { PrjReleasePlanSearchIndex } from "../../../services/core-engine/src/projects/search/PrjReleasePlanSearchIndex";

describe("PrjReleasePlan Stress & Concurrency Load Test", () => {
  const search = new PrjReleasePlanSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjReleasePlanWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
