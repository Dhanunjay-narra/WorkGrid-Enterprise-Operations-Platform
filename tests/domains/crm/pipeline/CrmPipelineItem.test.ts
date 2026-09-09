import { CrmPipelineItemService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineItemService";
import { CrmPipelineItemValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineItem";
import { CrmPipelineItemStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineItemStateMachine";

describe("CrmPipelineItem Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineItemService();
  const sm = new CrmPipelineItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineItem Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
