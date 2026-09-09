import { WorkflowEdgesReportService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesReportService";
import { WorkflowEdgesReportValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesReport";
import { WorkflowEdgesReportStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesReportStateMachine";

describe("WorkflowEdgesReport Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesReportService();
  const sm = new WorkflowEdgesReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesReport Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
