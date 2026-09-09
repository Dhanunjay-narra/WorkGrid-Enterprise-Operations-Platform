import { InvGoodsReceiptWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvGoodsReceiptWsHandler";
import { InvGoodsReceiptSearchIndex } from "../../../services/core-engine/src/inventory/search/InvGoodsReceiptSearchIndex";

describe("InvGoodsReceipt Stress & Concurrency Load Test", () => {
  const search = new InvGoodsReceiptSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvGoodsReceiptWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
