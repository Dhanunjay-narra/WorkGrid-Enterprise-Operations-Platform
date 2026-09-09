import { IotCommandExecutionLogWsHandler } from "../../../services/core-engine/src/iot/websockets/IotCommandExecutionLogWsHandler";
import { IotCommandExecutionLogSearchIndex } from "../../../services/core-engine/src/iot/search/IotCommandExecutionLogSearchIndex";

describe("IotCommandExecutionLog Stress & Concurrency Load Test", () => {
  const search = new IotCommandExecutionLogSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotCommandExecutionLogWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
