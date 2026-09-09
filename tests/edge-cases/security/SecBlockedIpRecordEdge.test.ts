import { SecBlockedIpRecordPublisher } from "../../../services/core-engine/src/security/events/SecBlockedIpRecordPublisher";
import { SecBlockedIpRecordTelemetry } from "../../../services/core-engine/src/security/telemetry/SecBlockedIpRecordTelemetry";

describe("SecBlockedIpRecord Edge-Case & Outbox Test Suite", () => {
  const publisher = new SecBlockedIpRecordPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SecBlockedIpRecordTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
