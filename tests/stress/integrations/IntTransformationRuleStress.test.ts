import { IntTransformationRuleWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntTransformationRuleWsHandler";
import { IntTransformationRuleSearchIndex } from "../../../services/core-engine/src/integrations/search/IntTransformationRuleSearchIndex";

describe("IntTransformationRule Stress & Concurrency Load Test", () => {
  const search = new IntTransformationRuleSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntTransformationRuleWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
