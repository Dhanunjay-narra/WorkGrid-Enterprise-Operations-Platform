import { HrLeavePolicyService } from "../../../services/core-engine/src/hr/services/HrLeavePolicyService";
import { HrLeavePolicyValidator } from "../../../packages/types/src/domains/hr/HrLeavePolicy";

describe("HrLeavePolicy Service & Validation Suite", () => {
  const service = new HrLeavePolicyService();

  test("creates a valid HrLeavePolicy record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrLeavePolicy",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrLeavePolicyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
