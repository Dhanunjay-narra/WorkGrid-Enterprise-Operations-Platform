import { CrmStageWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmStageWsHandler";
import { CrmStageSearchIndex } from "../../../services/core-engine/src/crm/search/CrmStageSearchIndex";

describe("CrmStage Stress & Concurrency Load Test", () => {
  const search = new CrmStageSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmStageWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
