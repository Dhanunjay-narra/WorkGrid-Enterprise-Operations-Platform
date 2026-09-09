import { WfWorkflowExecutionService } from "../../../services/core-engine/src/workflow/services/WfWorkflowExecutionService";
import { WfWorkflowExecutionValidator } from "../../../packages/types/src/domains/workflow/WfWorkflowExecution";

describe("WfWorkflowExecution Service & Validation Suite", () => {
  const service = new WfWorkflowExecutionService();

  test("creates a valid WfWorkflowExecution record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfWorkflowExecution",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfWorkflowExecutionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
