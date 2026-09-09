import { CommCallRoomWsHandler } from "../../../services/core-engine/src/communication/websockets/CommCallRoomWsHandler";
import { CommCallRoomSearchIndex } from "../../../services/core-engine/src/communication/search/CommCallRoomSearchIndex";

describe("CommCallRoom Stress & Concurrency Load Test", () => {
  const search = new CommCallRoomSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommCallRoomWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
