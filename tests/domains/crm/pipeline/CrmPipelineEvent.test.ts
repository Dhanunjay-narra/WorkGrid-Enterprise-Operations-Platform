import { CrmPipelineEventService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineEventService";
import { CrmPipelineEventValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineEvent";
import { CrmPipelineEventStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineEventStateMachine";

describe("CrmPipelineEvent Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineEventService();
  const sm = new CrmPipelineEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineEvent Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
