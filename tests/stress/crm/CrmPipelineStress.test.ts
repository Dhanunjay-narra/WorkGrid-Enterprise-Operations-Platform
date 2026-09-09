import { CrmPipelineWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmPipelineWsHandler";
import { CrmPipelineSearchIndex } from "../../../services/core-engine/src/crm/search/CrmPipelineSearchIndex";

describe("CrmPipeline Stress & Concurrency Load Test", () => {
  const search = new CrmPipelineSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmPipelineWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
