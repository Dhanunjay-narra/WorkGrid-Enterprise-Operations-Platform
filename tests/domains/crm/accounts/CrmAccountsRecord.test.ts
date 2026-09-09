import { CrmAccountsRecordService } from "../../../services/core-engine/src/crm/accounts/services/CrmAccountsRecordService";
import { CrmAccountsRecordValidator } from "../../../packages/types/src/domains/crm/accounts/CrmAccountsRecord";
import { CrmAccountsRecordStateMachine } from "../../../services/core-engine/src/crm/accounts/state-machines/CrmAccountsRecordStateMachine";

describe("CrmAccountsRecord Comprehensive Domain Test Suite", () => {
  const service = new CrmAccountsRecordService();
  const sm = new CrmAccountsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmAccountsRecord Instance",
      domain: "crm_accounts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmAccountsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
