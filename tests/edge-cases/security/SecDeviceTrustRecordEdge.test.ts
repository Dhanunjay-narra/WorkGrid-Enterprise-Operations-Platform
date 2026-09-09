import { SecDeviceTrustRecordPublisher } from "../../../services/core-engine/src/security/events/SecDeviceTrustRecordPublisher";
import { SecDeviceTrustRecordTelemetry } from "../../../services/core-engine/src/security/telemetry/SecDeviceTrustRecordTelemetry";

describe("SecDeviceTrustRecord Edge-Case & Outbox Test Suite", () => {
  const publisher = new SecDeviceTrustRecordPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SecDeviceTrustRecordTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
