import { WfWorkflowEdgeService } from "../../../services/core-engine/src/workflow/services/WfWorkflowEdgeService";
import { WfWorkflowEdgeValidator } from "../../../packages/types/src/domains/workflow/WfWorkflowEdge";

describe("WfWorkflowEdge Service & Validation Suite", () => {
  const service = new WfWorkflowEdgeService();

  test("creates a valid WfWorkflowEdge record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfWorkflowEdge",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfWorkflowEdgeValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
