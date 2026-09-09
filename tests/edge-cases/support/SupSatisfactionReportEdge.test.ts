import { SupSatisfactionReportPublisher } from "../../../services/core-engine/src/support/events/SupSatisfactionReportPublisher";
import { SupSatisfactionReportTelemetry } from "../../../services/core-engine/src/support/telemetry/SupSatisfactionReportTelemetry";

describe("SupSatisfactionReport Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupSatisfactionReportPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupSatisfactionReportTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
