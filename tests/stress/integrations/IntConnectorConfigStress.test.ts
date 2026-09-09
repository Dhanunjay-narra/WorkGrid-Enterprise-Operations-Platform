import { IntConnectorConfigWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntConnectorConfigWsHandler";
import { IntConnectorConfigSearchIndex } from "../../../services/core-engine/src/integrations/search/IntConnectorConfigSearchIndex";

describe("IntConnectorConfig Stress & Concurrency Load Test", () => {
  const search = new IntConnectorConfigSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntConnectorConfigWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
