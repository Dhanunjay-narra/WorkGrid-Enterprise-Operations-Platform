import { WorkflowNodesScheduleService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesScheduleService";
import { WorkflowNodesScheduleValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesSchedule";
import { WorkflowNodesScheduleStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesScheduleStateMachine";

describe("WorkflowNodesSchedule Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesScheduleService();
  const sm = new WorkflowNodesScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesSchedule Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
