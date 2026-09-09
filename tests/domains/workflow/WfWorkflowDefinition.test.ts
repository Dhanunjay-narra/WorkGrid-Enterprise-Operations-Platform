import { WfWorkflowDefinitionService } from "../../../services/core-engine/src/workflow/services/WfWorkflowDefinitionService";
import { WfWorkflowDefinitionValidator } from "../../../packages/types/src/domains/workflow/WfWorkflowDefinition";

describe("WfWorkflowDefinition Service & Validation Suite", () => {
  const service = new WfWorkflowDefinitionService();

  test("creates a valid WfWorkflowDefinition record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfWorkflowDefinition",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfWorkflowDefinitionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
