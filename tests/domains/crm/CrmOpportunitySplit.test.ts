import { CrmOpportunitySplitService } from "../../../services/core-engine/src/crm/services/CrmOpportunitySplitService";
import { CrmOpportunitySplitValidator } from "../../../packages/types/src/domains/crm/CrmOpportunitySplit";

describe("CrmOpportunitySplit Service & Validation Suite", () => {
  const service = new CrmOpportunitySplitService();

  test("creates a valid CrmOpportunitySplit record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmOpportunitySplit",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmOpportunitySplitValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
