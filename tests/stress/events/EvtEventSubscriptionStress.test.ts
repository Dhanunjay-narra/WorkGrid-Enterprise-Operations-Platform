import { EvtEventSubscriptionWsHandler } from "../../../services/core-engine/src/events/websockets/EvtEventSubscriptionWsHandler";
import { EvtEventSubscriptionSearchIndex } from "../../../services/core-engine/src/events/search/EvtEventSubscriptionSearchIndex";

describe("EvtEventSubscription Stress & Concurrency Load Test", () => {
  const search = new EvtEventSubscriptionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtEventSubscriptionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
