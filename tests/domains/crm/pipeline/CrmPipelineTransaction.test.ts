import { CrmPipelineTransactionService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineTransactionService";
import { CrmPipelineTransactionValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineTransaction";
import { CrmPipelineTransactionStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineTransactionStateMachine";

describe("CrmPipelineTransaction Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineTransactionService();
  const sm = new CrmPipelineTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineTransaction Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
