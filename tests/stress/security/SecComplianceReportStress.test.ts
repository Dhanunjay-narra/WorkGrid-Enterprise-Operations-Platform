import { SecComplianceReportWsHandler } from "../../../services/core-engine/src/security/websockets/SecComplianceReportWsHandler";
import { SecComplianceReportSearchIndex } from "../../../services/core-engine/src/security/search/SecComplianceReportSearchIndex";

describe("SecComplianceReport Stress & Concurrency Load Test", () => {
  const search = new SecComplianceReportSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SecComplianceReportWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
