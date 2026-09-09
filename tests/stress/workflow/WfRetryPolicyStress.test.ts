import { WfRetryPolicyWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfRetryPolicyWsHandler";
import { WfRetryPolicySearchIndex } from "../../../services/core-engine/src/workflow/search/WfRetryPolicySearchIndex";

describe("WfRetryPolicy Stress & Concurrency Load Test", () => {
  const search = new WfRetryPolicySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfRetryPolicyWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
