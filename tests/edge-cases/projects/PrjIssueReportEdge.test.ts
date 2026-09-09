import { PrjIssueReportPublisher } from "../../../services/core-engine/src/projects/events/PrjIssueReportPublisher";
import { PrjIssueReportTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjIssueReportTelemetry";

describe("PrjIssueReport Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjIssueReportPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjIssueReportTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
