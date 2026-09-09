import { HrLeaveRequestService } from "../../../services/core-engine/src/hr/services/HrLeaveRequestService";
import { HrLeaveRequestValidator } from "../../../packages/types/src/domains/hr/HrLeaveRequest";

describe("HrLeaveRequest Service & Validation Suite", () => {
  const service = new HrLeaveRequestService();

  test("creates a valid HrLeaveRequest record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrLeaveRequest",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrLeaveRequestValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
