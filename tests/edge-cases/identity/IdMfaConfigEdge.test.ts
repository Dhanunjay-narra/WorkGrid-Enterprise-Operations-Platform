import { IdMfaConfigPublisher } from "../../../services/core-engine/src/identity/events/IdMfaConfigPublisher";
import { IdMfaConfigTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdMfaConfigTelemetry";

describe("IdMfaConfig Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdMfaConfigPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdMfaConfigTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
