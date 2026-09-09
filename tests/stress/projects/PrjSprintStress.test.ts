import { PrjSprintWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjSprintWsHandler";
import { PrjSprintSearchIndex } from "../../../services/core-engine/src/projects/search/PrjSprintSearchIndex";

describe("PrjSprint Stress & Concurrency Load Test", () => {
  const search = new PrjSprintSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjSprintWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
