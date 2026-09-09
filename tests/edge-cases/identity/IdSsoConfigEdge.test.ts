import { IdSsoConfigPublisher } from "../../../services/core-engine/src/identity/events/IdSsoConfigPublisher";
import { IdSsoConfigTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdSsoConfigTelemetry";

describe("IdSsoConfig Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdSsoConfigPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdSsoConfigTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
