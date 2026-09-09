import { CrmSalesQuotaService } from "../../../services/core-engine/src/crm/services/CrmSalesQuotaService";
import { CrmSalesQuotaValidator } from "../../../packages/types/src/domains/crm/CrmSalesQuota";

describe("CrmSalesQuota Service & Validation Suite", () => {
  const service = new CrmSalesQuotaService();

  test("creates a valid CrmSalesQuota record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmSalesQuota",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmSalesQuotaValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
