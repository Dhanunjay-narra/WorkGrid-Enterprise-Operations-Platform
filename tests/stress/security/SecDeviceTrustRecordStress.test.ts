import { SecDeviceTrustRecordWsHandler } from "../../../services/core-engine/src/security/websockets/SecDeviceTrustRecordWsHandler";
import { SecDeviceTrustRecordSearchIndex } from "../../../services/core-engine/src/security/search/SecDeviceTrustRecordSearchIndex";

describe("SecDeviceTrustRecord Stress & Concurrency Load Test", () => {
  const search = new SecDeviceTrustRecordSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SecDeviceTrustRecordWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
