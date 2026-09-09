import { AiToolCallRecordWsHandler } from "../../../services/core-engine/src/ai/websockets/AiToolCallRecordWsHandler";
import { AiToolCallRecordSearchIndex } from "../../../services/core-engine/src/ai/search/AiToolCallRecordSearchIndex";

describe("AiToolCallRecord Stress & Concurrency Load Test", () => {
  const search = new AiToolCallRecordSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiToolCallRecordWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
