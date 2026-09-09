import { CrmStageService } from "../../../services/core-engine/src/crm/services/CrmStageService";
import { CrmStageValidator } from "../../../packages/types/src/domains/crm/CrmStage";

describe("CrmStage Service & Validation Suite", () => {
  const service = new CrmStageService();

  test("creates a valid CrmStage record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmStage",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmStageValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
