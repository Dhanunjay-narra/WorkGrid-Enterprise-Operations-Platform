import { WorkflowDagReportService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagReportService";
import { WorkflowDagReportValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagReport";
import { WorkflowDagReportStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagReportStateMachine";

describe("WorkflowDagReport Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagReportService();
  const sm = new WorkflowDagReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagReport Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
