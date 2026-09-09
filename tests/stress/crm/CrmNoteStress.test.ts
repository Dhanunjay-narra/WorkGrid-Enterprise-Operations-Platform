import { CrmNoteWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmNoteWsHandler";
import { CrmNoteSearchIndex } from "../../../services/core-engine/src/crm/search/CrmNoteSearchIndex";

describe("CrmNote Stress & Concurrency Load Test", () => {
  const search = new CrmNoteSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmNoteWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
