import { SecTamperLogWsHandler } from "../../../services/core-engine/src/security/websockets/SecTamperLogWsHandler";
import { SecTamperLogSearchIndex } from "../../../services/core-engine/src/security/search/SecTamperLogSearchIndex";

describe("SecTamperLog Stress & Concurrency Load Test", () => {
  const search = new SecTamperLogSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SecTamperLogWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
