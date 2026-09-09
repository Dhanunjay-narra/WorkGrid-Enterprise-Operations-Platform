import { InvStockReservationWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvStockReservationWsHandler";
import { InvStockReservationSearchIndex } from "../../../services/core-engine/src/inventory/search/InvStockReservationSearchIndex";

describe("InvStockReservation Stress & Concurrency Load Test", () => {
  const search = new InvStockReservationSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvStockReservationWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
