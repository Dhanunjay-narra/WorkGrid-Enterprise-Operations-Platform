import { SupTicketTagWsHandler } from "../../../services/core-engine/src/support/websockets/SupTicketTagWsHandler";
import { SupTicketTagSearchIndex } from "../../../services/core-engine/src/support/search/SupTicketTagSearchIndex";

describe("SupTicketTag Stress & Concurrency Load Test", () => {
  const search = new SupTicketTagSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupTicketTagWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
