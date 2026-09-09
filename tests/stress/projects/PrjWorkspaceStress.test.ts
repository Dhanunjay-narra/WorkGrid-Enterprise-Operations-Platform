import { PrjWorkspaceWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjWorkspaceWsHandler";
import { PrjWorkspaceSearchIndex } from "../../../services/core-engine/src/projects/search/PrjWorkspaceSearchIndex";

describe("PrjWorkspace Stress & Concurrency Load Test", () => {
  const search = new PrjWorkspaceSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjWorkspaceWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
