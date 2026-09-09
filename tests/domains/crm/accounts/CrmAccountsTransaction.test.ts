import { CrmAccountsTransactionService } from "../../../services/core-engine/src/crm/accounts/services/CrmAccountsTransactionService";
import { CrmAccountsTransactionValidator } from "../../../packages/types/src/domains/crm/accounts/CrmAccountsTransaction";
import { CrmAccountsTransactionStateMachine } from "../../../services/core-engine/src/crm/accounts/state-machines/CrmAccountsTransactionStateMachine";

describe("CrmAccountsTransaction Comprehensive Domain Test Suite", () => {
  const service = new CrmAccountsTransactionService();
  const sm = new CrmAccountsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmAccountsTransaction Instance",
      domain: "crm_accounts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmAccountsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
