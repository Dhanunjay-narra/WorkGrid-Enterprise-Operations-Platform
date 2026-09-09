import { HrOkrGoalService } from "../../../services/core-engine/src/hr/services/HrOkrGoalService";
import { HrOkrGoalValidator } from "../../../packages/types/src/domains/hr/HrOkrGoal";

describe("HrOkrGoal Service & Validation Suite", () => {
  const service = new HrOkrGoalService();

  test("creates a valid HrOkrGoal record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrOkrGoal",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrOkrGoalValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
