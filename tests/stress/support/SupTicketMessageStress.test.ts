import { SupTicketMessageWsHandler } from "../../../services/core-engine/src/support/websockets/SupTicketMessageWsHandler";
import { SupTicketMessageSearchIndex } from "../../../services/core-engine/src/support/search/SupTicketMessageSearchIndex";

describe("SupTicketMessage Stress & Concurrency Load Test", () => {
  const search = new SupTicketMessageSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupTicketMessageWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
