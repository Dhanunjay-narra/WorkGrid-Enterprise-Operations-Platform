import { SupTicketWsHandler } from "../../../services/core-engine/src/support/websockets/SupTicketWsHandler";
import { SupTicketSearchIndex } from "../../../services/core-engine/src/support/search/SupTicketSearchIndex";

describe("SupTicket Stress & Concurrency Load Test", () => {
  const search = new SupTicketSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupTicketWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
