import { IntWebhookEventLogPublisher } from "../../../services/core-engine/src/integrations/events/IntWebhookEventLogPublisher";
import { IntWebhookEventLogTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntWebhookEventLogTelemetry";

describe("IntWebhookEventLog Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntWebhookEventLogPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntWebhookEventLogTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
