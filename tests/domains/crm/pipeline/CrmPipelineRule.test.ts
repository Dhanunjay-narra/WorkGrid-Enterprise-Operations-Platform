import { CrmPipelineRuleService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineRuleService";
import { CrmPipelineRuleValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineRule";
import { CrmPipelineRuleStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineRuleStateMachine";

describe("CrmPipelineRule Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineRuleService();
  const sm = new CrmPipelineRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineRule Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
