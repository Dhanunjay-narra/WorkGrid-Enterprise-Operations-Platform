import { WfExecutionStepMetricWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfExecutionStepMetricWsHandler";
import { WfExecutionStepMetricSearchIndex } from "../../../services/core-engine/src/workflow/search/WfExecutionStepMetricSearchIndex";

describe("WfExecutionStepMetric Stress & Concurrency Load Test", () => {
  const search = new WfExecutionStepMetricSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfExecutionStepMetricWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
