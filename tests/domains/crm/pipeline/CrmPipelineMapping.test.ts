import { CrmPipelineMappingService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineMappingService";
import { CrmPipelineMappingValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineMapping";
import { CrmPipelineMappingStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineMappingStateMachine";

describe("CrmPipelineMapping Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineMappingService();
  const sm = new CrmPipelineMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineMapping Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
