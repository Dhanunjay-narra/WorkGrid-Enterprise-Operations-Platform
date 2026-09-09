import { PrjGanttDependencyWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjGanttDependencyWsHandler";
import { PrjGanttDependencySearchIndex } from "../../../services/core-engine/src/projects/search/PrjGanttDependencySearchIndex";

describe("PrjGanttDependency Stress & Concurrency Load Test", () => {
  const search = new PrjGanttDependencySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjGanttDependencyWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
