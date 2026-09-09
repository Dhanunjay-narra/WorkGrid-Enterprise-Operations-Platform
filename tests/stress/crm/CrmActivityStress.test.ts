import { CrmActivityWsHandler } from "../../../services/core-engine/src/crm/websockets/CrmActivityWsHandler";
import { CrmActivitySearchIndex } from "../../../services/core-engine/src/crm/search/CrmActivitySearchIndex";

describe("CrmActivity Stress & Concurrency Load Test", () => {
  const search = new CrmActivitySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CrmActivityWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
