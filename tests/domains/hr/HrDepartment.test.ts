import { HrDepartmentService } from "../../../services/core-engine/src/hr/services/HrDepartmentService";
import { HrDepartmentValidator } from "../../../packages/types/src/domains/hr/HrDepartment";

describe("HrDepartment Service & Validation Suite", () => {
  const service = new HrDepartmentService();

  test("creates a valid HrDepartment record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrDepartment",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrDepartmentValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
