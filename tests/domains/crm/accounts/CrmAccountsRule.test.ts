import { CrmAccountsRuleService } from "../../../services/core-engine/src/crm/accounts/services/CrmAccountsRuleService";
import { CrmAccountsRuleValidator } from "../../../packages/types/src/domains/crm/accounts/CrmAccountsRule";
import { CrmAccountsRuleStateMachine } from "../../../services/core-engine/src/crm/accounts/state-machines/CrmAccountsRuleStateMachine";

describe("CrmAccountsRule Comprehensive Domain Test Suite", () => {
  const service = new CrmAccountsRuleService();
  const sm = new CrmAccountsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmAccountsRule Instance",
      domain: "crm_accounts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmAccountsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
