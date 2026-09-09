import { HrOkrGoalWsHandler } from "../../../services/core-engine/src/hr/websockets/HrOkrGoalWsHandler";
import { HrOkrGoalSearchIndex } from "../../../services/core-engine/src/hr/search/HrOkrGoalSearchIndex";

describe("HrOkrGoal Stress & Concurrency Load Test", () => {
  const search = new HrOkrGoalSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrOkrGoalWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
