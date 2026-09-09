import { CrmPipelineReportService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineReportService";
import { CrmPipelineReportValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineReport";
import { CrmPipelineReportStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineReportStateMachine";

describe("CrmPipelineReport Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineReportService();
  const sm = new CrmPipelineReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineReport Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
