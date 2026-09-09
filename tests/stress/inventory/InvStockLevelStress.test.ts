import { InvStockLevelWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvStockLevelWsHandler";
import { InvStockLevelSearchIndex } from "../../../services/core-engine/src/inventory/search/InvStockLevelSearchIndex";

describe("InvStockLevel Stress & Concurrency Load Test", () => {
  const search = new InvStockLevelSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvStockLevelWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
