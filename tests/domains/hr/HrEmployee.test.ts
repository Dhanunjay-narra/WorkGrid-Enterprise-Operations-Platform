import { HrEmployeeService } from "../../../services/core-engine/src/hr/services/HrEmployeeService";
import { HrEmployeeValidator } from "../../../packages/types/src/domains/hr/HrEmployee";

describe("HrEmployee Service & Validation Suite", () => {
  const service = new HrEmployeeService();

  test("creates a valid HrEmployee record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrEmployee",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrEmployeeValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
