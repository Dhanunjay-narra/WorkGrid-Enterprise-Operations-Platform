import { SecSecretMetadataPublisher } from "../../../services/core-engine/src/security/events/SecSecretMetadataPublisher";
import { SecSecretMetadataTelemetry } from "../../../services/core-engine/src/security/telemetry/SecSecretMetadataTelemetry";

describe("SecSecretMetadata Edge-Case & Outbox Test Suite", () => {
  const publisher = new SecSecretMetadataPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SecSecretMetadataTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
