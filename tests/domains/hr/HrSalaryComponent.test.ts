import { HrSalaryComponentService } from "../../../services/core-engine/src/hr/services/HrSalaryComponentService";
import { HrSalaryComponentValidator } from "../../../packages/types/src/domains/hr/HrSalaryComponent";

describe("HrSalaryComponent Service & Validation Suite", () => {
  const service = new HrSalaryComponentService();

  test("creates a valid HrSalaryComponent record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrSalaryComponent",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrSalaryComponentValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
