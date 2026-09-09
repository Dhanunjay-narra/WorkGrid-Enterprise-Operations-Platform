import { AiTokenUsageRecordWsHandler } from "../../../services/core-engine/src/ai/websockets/AiTokenUsageRecordWsHandler";
import { AiTokenUsageRecordSearchIndex } from "../../../services/core-engine/src/ai/search/AiTokenUsageRecordSearchIndex";

describe("AiTokenUsageRecord Stress & Concurrency Load Test", () => {
  const search = new AiTokenUsageRecordSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiTokenUsageRecordWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
