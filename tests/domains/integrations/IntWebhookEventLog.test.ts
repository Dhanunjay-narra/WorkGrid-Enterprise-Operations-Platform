import { IntWebhookEventLogService } from "../../../services/core-engine/src/integrations/services/IntWebhookEventLogService";
import { IntWebhookEventLogValidator } from "../../../packages/types/src/domains/integrations/IntWebhookEventLog";

describe("IntWebhookEventLog Service & Validation Suite", () => {
  const service = new IntWebhookEventLogService();

  test("creates a valid IntWebhookEventLog record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntWebhookEventLog",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntWebhookEventLogValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
