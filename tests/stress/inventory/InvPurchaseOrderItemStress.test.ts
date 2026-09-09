import { InvPurchaseOrderItemWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvPurchaseOrderItemWsHandler";
import { InvPurchaseOrderItemSearchIndex } from "../../../services/core-engine/src/inventory/search/InvPurchaseOrderItemSearchIndex";

describe("InvPurchaseOrderItem Stress & Concurrency Load Test", () => {
  const search = new InvPurchaseOrderItemSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvPurchaseOrderItemWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
