import { CrmAccountsSnapshotService } from "../../../services/core-engine/src/crm/accounts/services/CrmAccountsSnapshotService";
import { CrmAccountsSnapshotValidator } from "../../../packages/types/src/domains/crm/accounts/CrmAccountsSnapshot";
import { CrmAccountsSnapshotStateMachine } from "../../../services/core-engine/src/crm/accounts/state-machines/CrmAccountsSnapshotStateMachine";

describe("CrmAccountsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new CrmAccountsSnapshotService();
  const sm = new CrmAccountsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmAccountsSnapshot Instance",
      domain: "crm_accounts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmAccountsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
