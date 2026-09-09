import { EvtPublishMetricWsHandler } from "../../../services/core-engine/src/events/websockets/EvtPublishMetricWsHandler";
import { EvtPublishMetricSearchIndex } from "../../../services/core-engine/src/events/search/EvtPublishMetricSearchIndex";

describe("EvtPublishMetric Stress & Concurrency Load Test", () => {
  const search = new EvtPublishMetricSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtPublishMetricWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
