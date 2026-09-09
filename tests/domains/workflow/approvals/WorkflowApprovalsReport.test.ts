import { WorkflowApprovalsReportService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsReportService";
import { WorkflowApprovalsReportValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsReport";
import { WorkflowApprovalsReportStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsReportStateMachine";

describe("WorkflowApprovalsReport Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsReportService();
  const sm = new WorkflowApprovalsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsReport Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
