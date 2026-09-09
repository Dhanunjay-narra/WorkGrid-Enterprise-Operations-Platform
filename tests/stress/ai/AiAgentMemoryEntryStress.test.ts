import { AiAgentMemoryEntryWsHandler } from "../../../services/core-engine/src/ai/websockets/AiAgentMemoryEntryWsHandler";
import { AiAgentMemoryEntrySearchIndex } from "../../../services/core-engine/src/ai/search/AiAgentMemoryEntrySearchIndex";

describe("AiAgentMemoryEntry Stress & Concurrency Load Test", () => {
  const search = new AiAgentMemoryEntrySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiAgentMemoryEntryWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
