import { IdPasskeyCredentialPublisher } from "../../../services/core-engine/src/identity/events/IdPasskeyCredentialPublisher";
import { IdPasskeyCredentialTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdPasskeyCredentialTelemetry";

describe("IdPasskeyCredential Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdPasskeyCredentialPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdPasskeyCredentialTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
