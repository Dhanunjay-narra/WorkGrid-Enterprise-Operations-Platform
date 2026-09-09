import { SupSlaPolicyWsHandler } from "../../../services/core-engine/src/support/websockets/SupSlaPolicyWsHandler";
import { SupSlaPolicySearchIndex } from "../../../services/core-engine/src/support/search/SupSlaPolicySearchIndex";

describe("SupSlaPolicy Stress & Concurrency Load Test", () => {
  const search = new SupSlaPolicySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupSlaPolicyWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
