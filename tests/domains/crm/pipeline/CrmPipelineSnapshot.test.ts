import { CrmPipelineSnapshotService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineSnapshotService";
import { CrmPipelineSnapshotValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineSnapshot";
import { CrmPipelineSnapshotStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineSnapshotStateMachine";

describe("CrmPipelineSnapshot Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineSnapshotService();
  const sm = new CrmPipelineSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineSnapshot Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
