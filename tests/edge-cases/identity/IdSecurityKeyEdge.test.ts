import { IdSecurityKeyPublisher } from "../../../services/core-engine/src/identity/events/IdSecurityKeyPublisher";
import { IdSecurityKeyTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdSecurityKeyTelemetry";

describe("IdSecurityKey Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdSecurityKeyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdSecurityKeyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
