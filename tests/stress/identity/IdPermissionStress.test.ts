import { IdPermissionWsHandler } from "../../../services/core-engine/src/identity/websockets/IdPermissionWsHandler";
import { IdPermissionSearchIndex } from "../../../services/core-engine/src/identity/search/IdPermissionSearchIndex";

describe("IdPermission Stress & Concurrency Load Test", () => {
  const search = new IdPermissionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdPermissionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
