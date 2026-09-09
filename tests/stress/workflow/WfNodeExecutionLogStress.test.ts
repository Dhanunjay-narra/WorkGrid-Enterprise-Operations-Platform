import { WfNodeExecutionLogWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfNodeExecutionLogWsHandler";
import { WfNodeExecutionLogSearchIndex } from "../../../services/core-engine/src/workflow/search/WfNodeExecutionLogSearchIndex";

describe("WfNodeExecutionLog Stress & Concurrency Load Test", () => {
  const search = new WfNodeExecutionLogSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfNodeExecutionLogWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
