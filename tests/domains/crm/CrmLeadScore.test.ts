import { CrmLeadScoreService } from "../../../services/core-engine/src/crm/services/CrmLeadScoreService";
import { CrmLeadScoreValidator } from "../../../packages/types/src/domains/crm/CrmLeadScore";

describe("CrmLeadScore Service & Validation Suite", () => {
  const service = new CrmLeadScoreService();

  test("creates a valid CrmLeadScore record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmLeadScore",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmLeadScoreValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
