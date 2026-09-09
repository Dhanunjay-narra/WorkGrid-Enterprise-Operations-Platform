import { AiDocumentChunkWsHandler } from "../../../services/core-engine/src/ai/websockets/AiDocumentChunkWsHandler";
import { AiDocumentChunkSearchIndex } from "../../../services/core-engine/src/ai/search/AiDocumentChunkSearchIndex";

describe("AiDocumentChunk Stress & Concurrency Load Test", () => {
  const search = new AiDocumentChunkSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => AiDocumentChunkWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
