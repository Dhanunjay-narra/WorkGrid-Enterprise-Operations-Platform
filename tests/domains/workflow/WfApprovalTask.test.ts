import { WfApprovalTaskService } from "../../../services/core-engine/src/workflow/services/WfApprovalTaskService";
import { WfApprovalTaskValidator } from "../../../packages/types/src/domains/workflow/WfApprovalTask";

describe("WfApprovalTask Service & Validation Suite", () => {
  const service = new WfApprovalTaskService();

  test("creates a valid WfApprovalTask record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfApprovalTask",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfApprovalTaskValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
