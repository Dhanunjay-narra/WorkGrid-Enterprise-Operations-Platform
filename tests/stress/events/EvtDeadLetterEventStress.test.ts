import { EvtDeadLetterEventWsHandler } from "../../../services/core-engine/src/events/websockets/EvtDeadLetterEventWsHandler";
import { EvtDeadLetterEventSearchIndex } from "../../../services/core-engine/src/events/search/EvtDeadLetterEventSearchIndex";

describe("EvtDeadLetterEvent Stress & Concurrency Load Test", () => {
  const search = new EvtDeadLetterEventSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtDeadLetterEventWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
