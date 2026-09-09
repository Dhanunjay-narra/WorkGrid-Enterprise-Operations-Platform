import { PrjSprintRetrospectiveWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjSprintRetrospectiveWsHandler";
import { PrjSprintRetrospectiveSearchIndex } from "../../../services/core-engine/src/projects/search/PrjSprintRetrospectiveSearchIndex";

describe("PrjSprintRetrospective Stress & Concurrency Load Test", () => {
  const search = new PrjSprintRetrospectiveSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjSprintRetrospectiveWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
