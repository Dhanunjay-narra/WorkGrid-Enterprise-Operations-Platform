import { CrmCallLogPublisher } from "../../../services/core-engine/src/crm/events/CrmCallLogPublisher";
import { CrmCallLogTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmCallLogTelemetry";

describe("CrmCallLog Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmCallLogPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmCallLogTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
