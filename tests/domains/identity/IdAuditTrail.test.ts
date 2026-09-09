import { IdAuditTrailService } from "../../../services/core-engine/src/identity/services/IdAuditTrailService";
import { IdAuditTrailValidator } from "../../../packages/types/src/domains/identity/IdAuditTrail";

describe("IdAuditTrail Service & Validation Suite", () => {
  const service = new IdAuditTrailService();

  test("creates a valid IdAuditTrail record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdAuditTrail",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdAuditTrailValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
