import { CommNotificationPreferenceWsHandler } from "../../../services/core-engine/src/communication/websockets/CommNotificationPreferenceWsHandler";
import { CommNotificationPreferenceSearchIndex } from "../../../services/core-engine/src/communication/search/CommNotificationPreferenceSearchIndex";

describe("CommNotificationPreference Stress & Concurrency Load Test", () => {
  const search = new CommNotificationPreferenceSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommNotificationPreferenceWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
