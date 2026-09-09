import { HrOnboardingChecklistService } from "../../../services/core-engine/src/hr/services/HrOnboardingChecklistService";
import { HrOnboardingChecklistValidator } from "../../../packages/types/src/domains/hr/HrOnboardingChecklist";

describe("HrOnboardingChecklist Service & Validation Suite", () => {
  const service = new HrOnboardingChecklistService();

  test("creates a valid HrOnboardingChecklist record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrOnboardingChecklist",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrOnboardingChecklistValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
