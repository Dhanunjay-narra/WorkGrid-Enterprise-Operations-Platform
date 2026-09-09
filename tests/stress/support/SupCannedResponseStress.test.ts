import { SupCannedResponseWsHandler } from "../../../services/core-engine/src/support/websockets/SupCannedResponseWsHandler";
import { SupCannedResponseSearchIndex } from "../../../services/core-engine/src/support/search/SupCannedResponseSearchIndex";

describe("SupCannedResponse Stress & Concurrency Load Test", () => {
  const search = new SupCannedResponseSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupCannedResponseWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
