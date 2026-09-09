import { WfWorkflowVersionService } from "../../../services/core-engine/src/workflow/services/WfWorkflowVersionService";
import { WfWorkflowVersionValidator } from "../../../packages/types/src/domains/workflow/WfWorkflowVersion";

describe("WfWorkflowVersion Service & Validation Suite", () => {
  const service = new WfWorkflowVersionService();

  test("creates a valid WfWorkflowVersion record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfWorkflowVersion",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfWorkflowVersionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
