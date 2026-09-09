import { InvTransferOrderWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvTransferOrderWsHandler";
import { InvTransferOrderSearchIndex } from "../../../services/core-engine/src/inventory/search/InvTransferOrderSearchIndex";

describe("InvTransferOrder Stress & Concurrency Load Test", () => {
  const search = new InvTransferOrderSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvTransferOrderWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
