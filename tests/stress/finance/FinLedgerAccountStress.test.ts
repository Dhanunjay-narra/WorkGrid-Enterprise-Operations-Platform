import { FinLedgerAccountWsHandler } from "../../../services/core-engine/src/finance/websockets/FinLedgerAccountWsHandler";
import { FinLedgerAccountSearchIndex } from "../../../services/core-engine/src/finance/search/FinLedgerAccountSearchIndex";

describe("FinLedgerAccount Stress & Concurrency Load Test", () => {
  const search = new FinLedgerAccountSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinLedgerAccountWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
