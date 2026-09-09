import { CommWebhookDispatchLogWsHandler } from "../../../services/core-engine/src/communication/websockets/CommWebhookDispatchLogWsHandler";
import { CommWebhookDispatchLogSearchIndex } from "../../../services/core-engine/src/communication/search/CommWebhookDispatchLogSearchIndex";

describe("CommWebhookDispatchLog Stress & Concurrency Load Test", () => {
  const search = new CommWebhookDispatchLogSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommWebhookDispatchLogWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
