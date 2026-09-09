import { WfWorkflowVersionWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfWorkflowVersionWsHandler";
import { WfWorkflowVersionSearchIndex } from "../../../services/core-engine/src/workflow/search/WfWorkflowVersionSearchIndex";

describe("WfWorkflowVersion Stress & Concurrency Load Test", () => {
  const search = new WfWorkflowVersionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfWorkflowVersionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
