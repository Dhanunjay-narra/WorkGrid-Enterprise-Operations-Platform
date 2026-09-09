import { IntWebhookSubscriptionService } from "../../../services/core-engine/src/integrations/services/IntWebhookSubscriptionService";
import { IntWebhookSubscriptionValidator } from "../../../packages/types/src/domains/integrations/IntWebhookSubscription";

describe("IntWebhookSubscription Service & Validation Suite", () => {
  const service = new IntWebhookSubscriptionService();

  test("creates a valid IntWebhookSubscription record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntWebhookSubscription",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntWebhookSubscriptionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
