import { SupCustomerSurveyWsHandler } from "../../../services/core-engine/src/support/websockets/SupCustomerSurveyWsHandler";
import { SupCustomerSurveySearchIndex } from "../../../services/core-engine/src/support/search/SupCustomerSurveySearchIndex";

describe("SupCustomerSurvey Stress & Concurrency Load Test", () => {
  const search = new SupCustomerSurveySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupCustomerSurveyWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
