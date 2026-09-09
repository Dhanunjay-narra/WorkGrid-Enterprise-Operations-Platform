import { WfDeadLetterQueueWsHandler } from "../../../services/core-engine/src/workflow/websockets/WfDeadLetterQueueWsHandler";
import { WfDeadLetterQueueSearchIndex } from "../../../services/core-engine/src/workflow/search/WfDeadLetterQueueSearchIndex";

describe("WfDeadLetterQueue Stress & Concurrency Load Test", () => {
  const search = new WfDeadLetterQueueSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => WfDeadLetterQueueWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
