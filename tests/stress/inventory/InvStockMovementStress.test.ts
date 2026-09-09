import { InvStockMovementWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvStockMovementWsHandler";
import { InvStockMovementSearchIndex } from "../../../services/core-engine/src/inventory/search/InvStockMovementSearchIndex";

describe("InvStockMovement Stress & Concurrency Load Test", () => {
  const search = new InvStockMovementSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvStockMovementWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
