import { WfEventTriggerWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfEventTriggerWsHandler";
import { WfEventTriggerSearchIndex } from "../../../services/core-engine/src/workflow/search/WfEventTriggerSearchIndex";

describe("WfEventTrigger Stress & Concurrency Load Test", () => {
  const search = new WfEventTriggerSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfEventTriggerWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
