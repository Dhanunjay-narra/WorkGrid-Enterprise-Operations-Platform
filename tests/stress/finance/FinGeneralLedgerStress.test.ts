import { FinGeneralLedgerWsHandler } from "../../../services/core-engine/src/finance/websockets/FinGeneralLedgerWsHandler";
import { FinGeneralLedgerSearchIndex } from "../../../services/core-engine/src/finance/search/FinGeneralLedgerSearchIndex";

describe("FinGeneralLedger Stress & Concurrency Load Test", () => {
  const search = new FinGeneralLedgerSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinGeneralLedgerWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
