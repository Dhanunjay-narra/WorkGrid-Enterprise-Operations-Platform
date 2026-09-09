import { EvtIdempotencyRecordWsHandler } from "../../../services/core-engine/src/events/websockets/EvtIdempotencyRecordWsHandler";
import { EvtIdempotencyRecordSearchIndex } from "../../../services/core-engine/src/events/search/EvtIdempotencyRecordSearchIndex";

describe("EvtIdempotencyRecord Stress & Concurrency Load Test", () => {
  const search = new EvtIdempotencyRecordSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtIdempotencyRecordWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
