import { PrjReleasePlanService } from "../../../services/core-engine/src/projects/services/PrjReleasePlanService";
import { PrjReleasePlanValidator } from "../../../packages/types/src/domains/projects/PrjReleasePlan";

describe("PrjReleasePlan Service & Validation Suite", () => {
  const service = new PrjReleasePlanService();

  test("creates a valid PrjReleasePlan record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjReleasePlan",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjReleasePlanValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
