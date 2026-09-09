import { FinRecurringPlanService } from "../../../services/core-engine/src/finance/services/FinRecurringPlanService";
import { FinRecurringPlanValidator } from "../../../packages/types/src/domains/finance/FinRecurringPlan";

describe("FinRecurringPlan Service & Validation Suite", () => {
  const service = new FinRecurringPlanService();

  test("creates a valid FinRecurringPlan record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinRecurringPlan",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinRecurringPlanValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
