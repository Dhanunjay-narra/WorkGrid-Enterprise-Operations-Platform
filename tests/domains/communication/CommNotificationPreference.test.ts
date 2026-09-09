import { CommNotificationPreferenceService } from "../../../services/core-engine/src/communication/services/CommNotificationPreferenceService";
import { CommNotificationPreferenceValidator } from "../../../packages/types/src/domains/communication/CommNotificationPreference";

describe("CommNotificationPreference Service & Validation Suite", () => {
  const service = new CommNotificationPreferenceService();

  test("creates a valid CommNotificationPreference record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommNotificationPreference",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommNotificationPreferenceValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
