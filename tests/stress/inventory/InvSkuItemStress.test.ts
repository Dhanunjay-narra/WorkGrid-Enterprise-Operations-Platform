import { InvSkuItemWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvSkuItemWsHandler";
import { InvSkuItemSearchIndex } from "../../../services/core-engine/src/inventory/search/InvSkuItemSearchIndex";

describe("InvSkuItem Stress & Concurrency Load Test", () => {
  const search = new InvSkuItemSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvSkuItemWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
