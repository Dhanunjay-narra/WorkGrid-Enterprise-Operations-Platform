import { WfApprovalDecisionWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfApprovalDecisionWsHandler";
import { WfApprovalDecisionSearchIndex } from "../../../services/core-engine/src/workflow/search/WfApprovalDecisionSearchIndex";

describe("WfApprovalDecision Stress & Concurrency Load Test", () => {
  const search = new WfApprovalDecisionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfApprovalDecisionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
