import { CrmCustomerHealthService } from "../../../services/core-engine/src/crm/services/CrmCustomerHealthService";
import { CrmCustomerHealthValidator } from "../../../packages/types/src/domains/crm/CrmCustomerHealth";

describe("CrmCustomerHealth Service & Validation Suite", () => {
  const service = new CrmCustomerHealthService();

  test("creates a valid CrmCustomerHealth record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmCustomerHealth",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmCustomerHealthValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
