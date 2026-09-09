import { FinRefundRecordWsHandler } from "../../../services/core-engine/src/finance/websockets/FinRefundRecordWsHandler";
import { FinRefundRecordSearchIndex } from "../../../services/core-engine/src/finance/search/FinRefundRecordSearchIndex";

describe("FinRefundRecord Stress & Concurrency Load Test", () => {
  const search = new FinRefundRecordSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinRefundRecordWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
