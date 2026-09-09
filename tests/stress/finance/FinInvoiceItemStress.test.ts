import { FinInvoiceItemWsHandler } from "../../../services/core-engine/src/finance/websockets/FinInvoiceItemWsHandler";
import { FinInvoiceItemSearchIndex } from "../../../services/core-engine/src/finance/search/FinInvoiceItemSearchIndex";

describe("FinInvoiceItem Stress & Concurrency Load Test", () => {
  const search = new FinInvoiceItemSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinInvoiceItemWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
