import { SecComplianceReportService } from "../../../services/core-engine/src/security/services/SecComplianceReportService";
import { SecComplianceReportValidator } from "../../../packages/types/src/domains/security/SecComplianceReport";

describe("SecComplianceReport Service & Validation Suite", () => {
  const service = new SecComplianceReportService();

  test("creates a valid SecComplianceReport record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecComplianceReport",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecComplianceReportValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
