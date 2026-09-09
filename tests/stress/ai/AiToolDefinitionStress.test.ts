import { AiToolDefinitionWsHandler } from "../../../services/core-engine/src/ai/websockets/AiToolDefinitionWsHandler";
import { AiToolDefinitionSearchIndex } from "../../../services/core-engine/src/ai/search/AiToolDefinitionSearchIndex";

describe("AiToolDefinition Stress & Concurrency Load Test", () => {
  const search = new AiToolDefinitionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiToolDefinitionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
