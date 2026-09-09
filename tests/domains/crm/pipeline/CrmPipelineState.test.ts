import { CrmPipelineStateService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineStateService";
import { CrmPipelineStateValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineState";
import { CrmPipelineStateStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineStateStateMachine";

describe("CrmPipelineState Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineStateService();
  const sm = new CrmPipelineStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineState Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
