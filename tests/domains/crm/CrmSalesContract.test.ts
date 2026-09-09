import { CrmSalesContractService } from "../../../services/core-engine/src/crm/services/CrmSalesContractService";
import { CrmSalesContractValidator } from "../../../packages/types/src/domains/crm/CrmSalesContract";

describe("CrmSalesContract Service & Validation Suite", () => {
  const service = new CrmSalesContractService();

  test("creates a valid CrmSalesContract record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmSalesContract",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmSalesContractValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
