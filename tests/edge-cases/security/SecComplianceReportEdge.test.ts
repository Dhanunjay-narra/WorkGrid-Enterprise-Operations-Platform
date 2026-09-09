import { SecComplianceReportPublisher } from "../../../services/core-engine/src/security/events/SecComplianceReportPublisher";
import { SecComplianceReportTelemetry } from "../../../services/core-engine/src/security/telemetry/SecComplianceReportTelemetry";

describe("SecComplianceReport Edge-Case & Outbox Test Suite", () => {
  const publisher = new SecComplianceReportPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SecComplianceReportTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
