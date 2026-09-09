import { CrmCallLogService } from "../../../services/core-engine/src/crm/services/CrmCallLogService";
import { CrmCallLogValidator } from "../../../packages/types/src/domains/crm/CrmCallLog";

describe("CrmCallLog Service & Validation Suite", () => {
  const service = new CrmCallLogService();

  test("creates a valid CrmCallLog record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmCallLog",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmCallLogValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
