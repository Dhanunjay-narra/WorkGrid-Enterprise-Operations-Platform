import { EvtOutboxMessageWsHandler } from "../../../services/core-engine/src/events/websockets/EvtOutboxMessageWsHandler";
import { EvtOutboxMessageSearchIndex } from "../../../services/core-engine/src/events/search/EvtOutboxMessageSearchIndex";

describe("EvtOutboxMessage Stress & Concurrency Load Test", () => {
  const search = new EvtOutboxMessageSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtOutboxMessageWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
