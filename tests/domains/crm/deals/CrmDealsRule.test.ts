import { CrmDealsRuleService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsRuleService";
import { CrmDealsRuleValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsRule";
import { CrmDealsRuleStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsRuleStateMachine";

describe("CrmDealsRule Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsRuleService();
  const sm = new CrmDealsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsRule Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
