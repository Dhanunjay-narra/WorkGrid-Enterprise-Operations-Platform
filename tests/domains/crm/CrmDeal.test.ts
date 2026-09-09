import { CrmDealService } from "../../../services/core-engine/src/crm/services/CrmDealService";
import { CrmDealValidator } from "../../../packages/types/src/domains/crm/CrmDeal";

describe("CrmDeal Service & Validation Suite", () => {
  const service = new CrmDealService();

  test("creates a valid CrmDeal record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmDeal",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmDealValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
