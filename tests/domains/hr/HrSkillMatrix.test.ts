import { HrSkillMatrixService } from "../../../services/core-engine/src/hr/services/HrSkillMatrixService";
import { HrSkillMatrixValidator } from "../../../packages/types/src/domains/hr/HrSkillMatrix";

describe("HrSkillMatrix Service & Validation Suite", () => {
  const service = new HrSkillMatrixService();

  test("creates a valid HrSkillMatrix record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrSkillMatrix",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrSkillMatrixValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
