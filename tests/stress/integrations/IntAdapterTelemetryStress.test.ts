import { IntAdapterTelemetryWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntAdapterTelemetryWsHandler";
import { IntAdapterTelemetrySearchIndex } from "../../../services/core-engine/src/integrations/search/IntAdapterTelemetrySearchIndex";

describe("IntAdapterTelemetry Stress & Concurrency Load Test", () => {
  const search = new IntAdapterTelemetrySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntAdapterTelemetryWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
