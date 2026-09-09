import { HrPayrollSlipService } from "../../../services/core-engine/src/hr/services/HrPayrollSlipService";
import { HrPayrollSlipValidator } from "../../../packages/types/src/domains/hr/HrPayrollSlip";

describe("HrPayrollSlip Service & Validation Suite", () => {
  const service = new HrPayrollSlipService();

  test("creates a valid HrPayrollSlip record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrPayrollSlip",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrPayrollSlipValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
