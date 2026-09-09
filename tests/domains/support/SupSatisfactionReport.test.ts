import { SupSatisfactionReportService } from "../../../services/core-engine/src/support/services/SupSatisfactionReportService";
import { SupSatisfactionReportValidator } from "../../../packages/types/src/domains/support/SupSatisfactionReport";

describe("SupSatisfactionReport Service & Validation Suite", () => {
  const service = new SupSatisfactionReportService();

  test("creates a valid SupSatisfactionReport record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupSatisfactionReport",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupSatisfactionReportValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
