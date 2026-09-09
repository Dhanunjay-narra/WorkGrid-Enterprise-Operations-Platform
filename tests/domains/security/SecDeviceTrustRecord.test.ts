import { SecDeviceTrustRecordService } from "../../../services/core-engine/src/security/services/SecDeviceTrustRecordService";
import { SecDeviceTrustRecordValidator } from "../../../packages/types/src/domains/security/SecDeviceTrustRecord";

describe("SecDeviceTrustRecord Service & Validation Suite", () => {
  const service = new SecDeviceTrustRecordService();

  test("creates a valid SecDeviceTrustRecord record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecDeviceTrustRecord",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecDeviceTrustRecordValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
