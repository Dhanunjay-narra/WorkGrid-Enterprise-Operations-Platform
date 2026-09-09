import { FinJournalEntryWsHandler } from "../../../services/core-engine/src/finance/websockets/FinJournalEntryWsHandler";
import { FinJournalEntrySearchIndex } from "../../../services/core-engine/src/finance/search/FinJournalEntrySearchIndex";

describe("FinJournalEntry Stress & Concurrency Load Test", () => {
  const search = new FinJournalEntrySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinJournalEntryWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
