import { CrmHealthRuleService } from "../../../services/core-engine/src/crm/health/services/CrmHealthRuleService";
import { CrmHealthRuleValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthRule";
import { CrmHealthRuleStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthRuleStateMachine";

describe("CrmHealthRule Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthRuleService();
  const sm = new CrmHealthRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthRule Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
