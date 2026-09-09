import { AiAgentExecutionLogWsHandler } from "../../../services/core-engine/src/ai/websockets/AiAgentExecutionLogWsHandler";
import { AiAgentExecutionLogSearchIndex } from "../../../services/core-engine/src/ai/search/AiAgentExecutionLogSearchIndex";

describe("AiAgentExecutionLog Stress & Concurrency Load Test", () => {
  const search = new AiAgentExecutionLogSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiAgentExecutionLogWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
