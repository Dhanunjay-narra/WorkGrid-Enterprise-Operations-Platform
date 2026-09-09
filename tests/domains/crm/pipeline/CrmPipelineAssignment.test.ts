import { CrmPipelineAssignmentService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineAssignmentService";
import { CrmPipelineAssignmentValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineAssignment";
import { CrmPipelineAssignmentStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineAssignmentStateMachine";

describe("CrmPipelineAssignment Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineAssignmentService();
  const sm = new CrmPipelineAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineAssignment Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
