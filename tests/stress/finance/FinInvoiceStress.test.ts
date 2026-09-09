import { FinInvoiceWsHandler } from "../../../services/core-engine/src/finance/websockets/FinInvoiceWsHandler";
import { FinInvoiceSearchIndex } from "../../../services/core-engine/src/finance/search/FinInvoiceSearchIndex";

describe("FinInvoice Stress & Concurrency Load Test", () => {
  const search = new FinInvoiceSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinInvoiceWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
