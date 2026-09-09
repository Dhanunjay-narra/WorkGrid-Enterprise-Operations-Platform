import { CrmEmailSequenceWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmEmailSequenceWsHandler";
import { CrmEmailSequenceSearchIndex } from "../../../services/core-engine/src/crm/search/CrmEmailSequenceSearchIndex";

describe("CrmEmailSequence Stress & Concurrency Load Test", () => {
  const search = new CrmEmailSequenceSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmEmailSequenceWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
