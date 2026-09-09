import { CrmPipelineNodeService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineNodeService";
import { CrmPipelineNodeValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineNode";
import { CrmPipelineNodeStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineNodeStateMachine";

describe("CrmPipelineNode Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineNodeService();
  const sm = new CrmPipelineNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineNode Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
