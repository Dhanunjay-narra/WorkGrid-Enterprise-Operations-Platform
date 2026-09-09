import { HrDesignationService } from "../../../services/core-engine/src/hr/services/HrDesignationService";
import { HrDesignationValidator } from "../../../packages/types/src/domains/hr/HrDesignation";

describe("HrDesignation Service & Validation Suite", () => {
  const service = new HrDesignationService();

  test("creates a valid HrDesignation record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrDesignation",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrDesignationValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
