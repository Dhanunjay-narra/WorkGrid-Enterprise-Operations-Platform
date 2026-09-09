import { FinRecurringPlanWsHandler } from "../../../services/core-engine/src/finance/websockets/FinRecurringPlanWsHandler";
import { FinRecurringPlanSearchIndex } from "../../../services/core-engine/src/finance/search/FinRecurringPlanSearchIndex";

describe("FinRecurringPlan Stress & Concurrency Load Test", () => {
  const search = new FinRecurringPlanSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinRecurringPlanWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
