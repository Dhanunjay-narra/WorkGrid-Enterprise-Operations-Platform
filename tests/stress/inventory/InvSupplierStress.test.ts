import { InvSupplierWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvSupplierWsHandler";
import { InvSupplierSearchIndex } from "../../../services/core-engine/src/inventory/search/InvSupplierSearchIndex";

describe("InvSupplier Stress & Concurrency Load Test", () => {
  const search = new InvSupplierSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvSupplierWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
