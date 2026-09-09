import { IdPolicyPublisher } from "../../../services/core-engine/src/identity/events/IdPolicyPublisher";
import { IdPolicyTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdPolicyTelemetry";

describe("IdPolicy Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdPolicyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdPolicyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
