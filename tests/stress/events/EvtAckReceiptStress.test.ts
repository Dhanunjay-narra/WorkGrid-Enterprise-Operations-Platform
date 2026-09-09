import { EvtAckReceiptWsHandler } from "../../../services/core-engine/src/events/websockets/EvtAckReceiptWsHandler";
import { EvtAckReceiptSearchIndex } from "../../../services/core-engine/src/events/search/EvtAckReceiptSearchIndex";

describe("EvtAckReceipt Stress & Concurrency Load Test", () => {
  const search = new EvtAckReceiptSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtAckReceiptWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
