import { PrjBudgetLineWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjBudgetLineWsHandler";
import { PrjBudgetLineSearchIndex } from "../../../services/core-engine/src/projects/search/PrjBudgetLineSearchIndex";

describe("PrjBudgetLine Stress & Concurrency Load Test", () => {
  const search = new PrjBudgetLineSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjBudgetLineWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
