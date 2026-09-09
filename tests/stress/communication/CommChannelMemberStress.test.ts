import { CommChannelMemberWsHandler } from "../../../services/core-engine/src/communication/websockets/CommChannelMemberWsHandler";
import { CommChannelMemberSearchIndex } from "../../../services/core-engine/src/communication/search/CommChannelMemberSearchIndex";

describe("CommChannelMember Stress & Concurrency Load Test", () => {
  const search = new CommChannelMemberSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommChannelMemberWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
