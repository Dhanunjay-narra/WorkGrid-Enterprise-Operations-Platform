import { CrmDealsConfigService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsConfigService";
import { CrmDealsConfigValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsConfig";
import { CrmDealsConfigStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsConfigStateMachine";

describe("CrmDealsConfig Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsConfigService();
  const sm = new CrmDealsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsConfig Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
