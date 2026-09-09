import { SecTamperLogService } from "../../../services/core-engine/src/security/services/SecTamperLogService";
import { SecTamperLogValidator } from "../../../packages/types/src/domains/security/SecTamperLog";

describe("SecTamperLog Service & Validation Suite", () => {
  const service = new SecTamperLogService();

  test("creates a valid SecTamperLog record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecTamperLog",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecTamperLogValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
