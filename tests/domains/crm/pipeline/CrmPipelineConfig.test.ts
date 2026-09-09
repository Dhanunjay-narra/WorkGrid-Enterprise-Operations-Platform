import { CrmPipelineConfigService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineConfigService";
import { CrmPipelineConfigValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineConfig";
import { CrmPipelineConfigStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineConfigStateMachine";

describe("CrmPipelineConfig Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineConfigService();
  const sm = new CrmPipelineConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineConfig Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
