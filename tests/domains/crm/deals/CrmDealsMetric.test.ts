import { CrmDealsMetricService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsMetricService";
import { CrmDealsMetricValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsMetric";
import { CrmDealsMetricStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsMetricStateMachine";

describe("CrmDealsMetric Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsMetricService();
  const sm = new CrmDealsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsMetric Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
