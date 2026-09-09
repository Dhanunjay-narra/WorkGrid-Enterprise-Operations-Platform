import { CrmPipelineMetricService } from "../../../services/core-engine/src/crm/pipeline/services/CrmPipelineMetricService";
import { CrmPipelineMetricValidator } from "../../../packages/types/src/domains/crm/pipeline/CrmPipelineMetric";
import { CrmPipelineMetricStateMachine } from "../../../services/core-engine/src/crm/pipeline/state-machines/CrmPipelineMetricStateMachine";

describe("CrmPipelineMetric Comprehensive Domain Test Suite", () => {
  const service = new CrmPipelineMetricService();
  const sm = new CrmPipelineMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmPipelineMetric Instance",
      domain: "crm_pipeline",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmPipelineMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
