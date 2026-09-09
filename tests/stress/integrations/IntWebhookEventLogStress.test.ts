import { IntWebhookEventLogWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntWebhookEventLogWsHandler";
import { IntWebhookEventLogSearchIndex } from "../../../services/core-engine/src/integrations/search/IntWebhookEventLogSearchIndex";

describe("IntWebhookEventLog Stress & Concurrency Load Test", () => {
  const search = new IntWebhookEventLogSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntWebhookEventLogWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
