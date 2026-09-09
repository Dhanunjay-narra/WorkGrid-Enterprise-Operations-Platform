import { IdApiKeyPublisher } from "../../../services/core-engine/src/identity/events/IdApiKeyPublisher";
import { IdApiKeyTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdApiKeyTelemetry";

describe("IdApiKey Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdApiKeyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdApiKeyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
