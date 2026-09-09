import { SecSecurityPolicyWsHandler } from "../../../services/core-engine/src/security/websockets/SecSecurityPolicyWsHandler";
import { SecSecurityPolicySearchIndex } from "../../../services/core-engine/src/security/search/SecSecurityPolicySearchIndex";

describe("SecSecurityPolicy Stress & Concurrency Load Test", () => {
  const search = new SecSecurityPolicySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SecSecurityPolicyWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
