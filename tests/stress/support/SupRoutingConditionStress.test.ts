import { SupRoutingConditionWsHandler } from "../../../services/core-engine/src/support/websockets/SupRoutingConditionWsHandler";
import { SupRoutingConditionSearchIndex } from "../../../services/core-engine/src/support/search/SupRoutingConditionSearchIndex";

describe("SupRoutingCondition Stress & Concurrency Load Test", () => {
  const search = new SupRoutingConditionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupRoutingConditionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
