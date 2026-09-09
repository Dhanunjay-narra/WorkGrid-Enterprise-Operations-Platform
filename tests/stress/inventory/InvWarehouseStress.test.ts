import { InvWarehouseWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvWarehouseWsHandler";
import { InvWarehouseSearchIndex } from "../../../services/core-engine/src/inventory/search/InvWarehouseSearchIndex";

describe("InvWarehouse Stress & Concurrency Load Test", () => {
  const search = new InvWarehouseSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvWarehouseWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
