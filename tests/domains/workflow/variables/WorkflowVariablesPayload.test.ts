import { WorkflowVariablesPayloadService } from "../../../services/core-engine/src/workflow/variables/services/WorkflowVariablesPayloadService";
import { WorkflowVariablesPayloadValidator } from "../../../packages/types/src/domains/workflow/variables/WorkflowVariablesPayload";
import { WorkflowVariablesPayloadStateMachine } from "../../../services/core-engine/src/workflow/variables/state-machines/WorkflowVariablesPayloadStateMachine";

describe("WorkflowVariablesPayload Comprehensive Domain Test Suite", () => {
  const service = new WorkflowVariablesPayloadService();
  const sm = new WorkflowVariablesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowVariablesPayload Instance",
      domain: "workflow_variables",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowVariablesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
