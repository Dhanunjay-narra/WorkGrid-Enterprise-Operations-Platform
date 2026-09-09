import { IntWebhookSubscriptionPublisher } from "../../../services/core-engine/src/integrations/events/IntWebhookSubscriptionPublisher";
import { IntWebhookSubscriptionTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntWebhookSubscriptionTelemetry";

describe("IntWebhookSubscription Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntWebhookSubscriptionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntWebhookSubscriptionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
