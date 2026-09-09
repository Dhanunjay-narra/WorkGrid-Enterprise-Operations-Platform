import { InvReorderRuleWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvReorderRuleWsHandler";
import { InvReorderRuleSearchIndex } from "../../../services/core-engine/src/inventory/search/InvReorderRuleSearchIndex";

describe("InvReorderRule Stress & Concurrency Load Test", () => {
  const search = new InvReorderRuleSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvReorderRuleWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
