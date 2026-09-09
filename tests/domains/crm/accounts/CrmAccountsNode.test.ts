import { CrmAccountsNodeService } from "../../../services/core-engine/src/crm/accounts/services/CrmAccountsNodeService";
import { CrmAccountsNodeValidator } from "../../../packages/types/src/domains/crm/accounts/CrmAccountsNode";
import { CrmAccountsNodeStateMachine } from "../../../services/core-engine/src/crm/accounts/state-machines/CrmAccountsNodeStateMachine";

describe("CrmAccountsNode Comprehensive Domain Test Suite", () => {
  const service = new CrmAccountsNodeService();
  const sm = new CrmAccountsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmAccountsNode Instance",
      domain: "crm_accounts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmAccountsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
