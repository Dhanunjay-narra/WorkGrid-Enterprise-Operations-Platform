import { SecThreatEventWsHandler } from "../../../services/core-engine/src/security/websockets/SecThreatEventWsHandler";
import { SecThreatEventSearchIndex } from "../../../services/core-engine/src/security/search/SecThreatEventSearchIndex";

describe("SecThreatEvent Stress & Concurrency Load Test", () => {
  const search = new SecThreatEventSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SecThreatEventWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
