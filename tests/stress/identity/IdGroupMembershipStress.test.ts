import { IdGroupMembershipWsHandler } from "../../../services/core-engine/src/identity/websockets/IdGroupMembershipWsHandler";
import { IdGroupMembershipSearchIndex } from "../../../services/core-engine/src/identity/search/IdGroupMembershipSearchIndex";

describe("IdGroupMembership Stress & Concurrency Load Test", () => {
  const search = new IdGroupMembershipSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdGroupMembershipWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
