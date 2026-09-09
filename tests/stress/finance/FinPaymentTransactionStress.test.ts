import { FinPaymentTransactionWsHandler } from "../../../services/core-engine/src/finance/websockets/FinPaymentTransactionWsHandler";
import { FinPaymentTransactionSearchIndex } from "../../../services/core-engine/src/finance/search/FinPaymentTransactionSearchIndex";

describe("FinPaymentTransaction Stress & Concurrency Load Test", () => {
  const search = new FinPaymentTransactionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinPaymentTransactionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
