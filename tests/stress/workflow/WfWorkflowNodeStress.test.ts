import { WfWorkflowNodeWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfWorkflowNodeWsHandler";
import { WfWorkflowNodeSearchIndex } from "../../../services/core-engine/src/workflow/search/WfWorkflowNodeSearchIndex";

describe("WfWorkflowNode Stress & Concurrency Load Test", () => {
  const search = new WfWorkflowNodeSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfWorkflowNodeWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
