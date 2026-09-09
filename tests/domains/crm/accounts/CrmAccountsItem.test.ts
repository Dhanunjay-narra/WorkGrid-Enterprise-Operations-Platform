import { CrmAccountsItemService } from "../../../services/core-engine/src/crm/accounts/services/CrmAccountsItemService";
import { CrmAccountsItemValidator } from "../../../packages/types/src/domains/crm/accounts/CrmAccountsItem";
import { CrmAccountsItemStateMachine } from "../../../services/core-engine/src/crm/accounts/state-machines/CrmAccountsItemStateMachine";

describe("CrmAccountsItem Comprehensive Domain Test Suite", () => {
  const service = new CrmAccountsItemService();
  const sm = new CrmAccountsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmAccountsItem Instance",
      domain: "crm_accounts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmAccountsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
