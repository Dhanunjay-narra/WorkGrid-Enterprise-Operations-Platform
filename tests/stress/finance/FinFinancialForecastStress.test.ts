import { FinFinancialForecastWsHandler } from "../../../services/core-engine/src/finance/websockets/FinFinancialForecastWsHandler";
import { FinFinancialForecastSearchIndex } from "../../../services/core-engine/src/finance/search/FinFinancialForecastSearchIndex";

describe("FinFinancialForecast Stress & Concurrency Load Test", () => {
  const search = new FinFinancialForecastSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinFinancialForecastWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
