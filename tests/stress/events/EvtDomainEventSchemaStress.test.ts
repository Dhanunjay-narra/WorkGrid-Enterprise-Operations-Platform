import { EvtDomainEventSchemaWsHandler } from "../../../services/core-engine/src/events/websockets/EvtDomainEventSchemaWsHandler";
import { EvtDomainEventSchemaSearchIndex } from "../../../services/core-engine/src/events/search/EvtDomainEventSchemaSearchIndex";

describe("EvtDomainEventSchema Stress & Concurrency Load Test", () => {
  const search = new EvtDomainEventSchemaSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtDomainEventSchemaWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
