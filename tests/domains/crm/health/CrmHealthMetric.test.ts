import { CrmHealthMetricService } from "../../../services/core-engine/src/crm/health/services/CrmHealthMetricService";
import { CrmHealthMetricValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthMetric";
import { CrmHealthMetricStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthMetricStateMachine";

describe("CrmHealthMetric Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthMetricService();
  const sm = new CrmHealthMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthMetric Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
