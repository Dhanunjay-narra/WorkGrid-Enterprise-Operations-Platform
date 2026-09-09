import { PrjSubtaskWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjSubtaskWsHandler";
import { PrjSubtaskSearchIndex } from "../../../services/core-engine/src/projects/search/PrjSubtaskSearchIndex";

describe("PrjSubtask Stress & Concurrency Load Test", () => {
  const search = new PrjSubtaskSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjSubtaskWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
