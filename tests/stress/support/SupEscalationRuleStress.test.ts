import { SupEscalationRuleWsHandler } from "../../../services/core-engine/src/support/websockets/SupEscalationRuleWsHandler";
import { SupEscalationRuleSearchIndex } from "../../../services/core-engine/src/support/search/SupEscalationRuleSearchIndex";

describe("SupEscalationRule Stress & Concurrency Load Test", () => {
  const search = new SupEscalationRuleSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupEscalationRuleWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
