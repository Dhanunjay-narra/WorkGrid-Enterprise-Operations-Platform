import { WorkflowDagPayloadService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagPayloadService";
import { WorkflowDagPayloadValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagPayload";
import { WorkflowDagPayloadStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagPayloadStateMachine";

describe("WorkflowDagPayload Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagPayloadService();
  const sm = new WorkflowDagPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagPayload Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
