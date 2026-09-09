import { HrInterviewStageWsHandler } from "../../../services/core-engine/src/hr/websockets/HrInterviewStageWsHandler";
import { HrInterviewStageSearchIndex } from "../../../services/core-engine/src/hr/search/HrInterviewStageSearchIndex";

describe("HrInterviewStage Stress & Concurrency Load Test", () => {
  const search = new HrInterviewStageSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrInterviewStageWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
