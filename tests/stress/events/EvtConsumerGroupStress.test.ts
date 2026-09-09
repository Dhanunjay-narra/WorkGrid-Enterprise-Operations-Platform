import { EvtConsumerGroupWsHandler } from "../../../services/core-engine/src/events/websockets/EvtConsumerGroupWsHandler";
import { EvtConsumerGroupSearchIndex } from "../../../services/core-engine/src/events/search/EvtConsumerGroupSearchIndex";

describe("EvtConsumerGroup Stress & Concurrency Load Test", () => {
  const search = new EvtConsumerGroupSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtConsumerGroupWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
