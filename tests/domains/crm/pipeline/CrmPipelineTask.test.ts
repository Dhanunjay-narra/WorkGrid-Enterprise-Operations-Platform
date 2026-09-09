import { CrmPipelineTaskService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineTaskService";
import { CrmPipelineTaskValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineTask";
import { CrmPipelineTaskStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineTaskStateMachine";

describe("CrmPipelineTask Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineTaskService();
  const sm = new CrmPipelineTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineTask Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
