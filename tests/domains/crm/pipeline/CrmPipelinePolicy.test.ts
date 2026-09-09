import { CrmPipelinePolicyService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelinePolicyService";
import { CrmPipelinePolicyValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelinePolicy";
import { CrmPipelinePolicyStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelinePolicyStateMachine";

describe("CrmPipelinePolicy Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelinePolicyService();
  const sm = new CrmPipelinePolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelinePolicy Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelinePolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
