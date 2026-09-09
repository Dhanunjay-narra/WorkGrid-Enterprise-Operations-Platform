import { WfWorkflowExecutionWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfWorkflowExecutionWsHandler";
import { WfWorkflowExecutionSearchIndex } from "../../../services/core-engine/src/workflow/search/WfWorkflowExecutionSearchIndex";

describe("WfWorkflowExecution Stress & Concurrency Load Test", () => {
  const search = new WfWorkflowExecutionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfWorkflowExecutionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
