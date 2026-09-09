import { AiAgentConversationSessionWsHandler } from "../../../services/core-engine/src/ai/websockets/AiAgentConversationSessionWsHandler";
import { AiAgentConversationSessionSearchIndex } from "../../../services/core-engine/src/ai/search/AiAgentConversationSessionSearchIndex";

describe("AiAgentConversationSession Stress & Concurrency Load Test", () => {
  const search = new AiAgentConversationSessionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiAgentConversationSessionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
