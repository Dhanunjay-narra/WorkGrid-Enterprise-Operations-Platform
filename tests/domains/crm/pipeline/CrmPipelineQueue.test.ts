import { CrmPipelineQueueService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineQueueService";
import { CrmPipelineQueueValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineQueue";
import { CrmPipelineQueueStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineQueueStateMachine";

describe("CrmPipelineQueue Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineQueueService();
  const sm = new CrmPipelineQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineQueue Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
