import { CrmAccountsStateService } from "../../../services/core-engine/src/crm/accounts/services/CrmAccountsStateService";
import { CrmAccountsStateValidator } from "../../../packages/types/src/domains/crm/accounts/CrmAccountsState";
import { CrmAccountsStateStateMachine } from "../../../services/core-engine/src/crm/accounts/state-machines/CrmAccountsStateStateMachine";

describe("CrmAccountsState Comprehensive Domain Test Suite", () => {
  const service = new CrmAccountsStateService();
  const sm = new CrmAccountsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmAccountsState Instance",
      domain: "crm_accounts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmAccountsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
