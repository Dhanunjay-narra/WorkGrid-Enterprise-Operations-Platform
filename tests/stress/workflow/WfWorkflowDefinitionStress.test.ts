import { WfWorkflowDefinitionWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfWorkflowDefinitionWsHandler";
import { WfWorkflowDefinitionSearchIndex } from "../../../services/core-engine/src/workflow/search/WfWorkflowDefinitionSearchIndex";

describe("WfWorkflowDefinition Stress & Concurrency Load Test", () => {
  const search = new WfWorkflowDefinitionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfWorkflowDefinitionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
