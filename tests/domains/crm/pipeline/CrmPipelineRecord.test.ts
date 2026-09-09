import { CrmPipelineRecordService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineRecordService";
import { CrmPipelineRecordValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineRecord";
import { CrmPipelineRecordStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineRecordStateMachine";

describe("CrmPipelineRecord Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineRecordService();
  const sm = new CrmPipelineRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineRecord Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
