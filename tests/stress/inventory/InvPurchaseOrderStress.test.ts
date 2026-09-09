import { InvPurchaseOrderWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvPurchaseOrderWsHandler";
import { InvPurchaseOrderSearchIndex } from "../../../services/core-engine/src/inventory/search/InvPurchaseOrderSearchIndex";

describe("InvPurchaseOrder Stress & Concurrency Load Test", () => {
  const search = new InvPurchaseOrderSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvPurchaseOrderWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
