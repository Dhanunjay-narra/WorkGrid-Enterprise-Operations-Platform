import { PrjMilestoneService } from "../../../services/core-engine/src/projects/services/PrjMilestoneService";
import { PrjMilestoneValidator } from "../../../packages/types/src/domains/projects/PrjMilestone";

describe("PrjMilestone Service & Validation Suite", () => {
  const service = new PrjMilestoneService();

  test("creates a valid PrjMilestone record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjMilestone",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjMilestoneValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
