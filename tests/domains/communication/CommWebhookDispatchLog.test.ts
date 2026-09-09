import { CommWebhookDispatchLogService } from "../../../services/core-engine/src/communication/services/CommWebhookDispatchLogService";
import { CommWebhookDispatchLogValidator } from "../../../packages/types/src/domains/communication/CommWebhookDispatchLog";

describe("CommWebhookDispatchLog Service & Validation Suite", () => {
  const service = new CommWebhookDispatchLogService();

  test("creates a valid CommWebhookDispatchLog record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommWebhookDispatchLog",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommWebhookDispatchLogValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
