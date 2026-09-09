import { SecBlockedIpRecordService } from "../../../services/core-engine/src/security/services/SecBlockedIpRecordService";
import { SecBlockedIpRecordValidator } from "../../../packages/types/src/domains/security/SecBlockedIpRecord";

describe("SecBlockedIpRecord Service & Validation Suite", () => {
  const service = new SecBlockedIpRecordService();

  test("creates a valid SecBlockedIpRecord record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecBlockedIpRecord",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecBlockedIpRecordValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
