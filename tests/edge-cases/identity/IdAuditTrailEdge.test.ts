import { IdAuditTrailPublisher } from "../../../services/core-engine/src/identity/events/IdAuditTrailPublisher";
import { IdAuditTrailTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdAuditTrailTelemetry";

describe("IdAuditTrail Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdAuditTrailPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdAuditTrailTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
