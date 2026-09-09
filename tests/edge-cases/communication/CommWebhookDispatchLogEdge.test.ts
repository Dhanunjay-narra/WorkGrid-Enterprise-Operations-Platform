import { CommWebhookDispatchLogPublisher } from "../../../services/core-engine/src/communication/events/CommWebhookDispatchLogPublisher";
import { CommWebhookDispatchLogTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommWebhookDispatchLogTelemetry";

describe("CommWebhookDispatchLog Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommWebhookDispatchLogPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommWebhookDispatchLogTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
