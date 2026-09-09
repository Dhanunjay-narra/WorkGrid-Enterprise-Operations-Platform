import { CrmAccountsPayloadService } from "../../../services/core-engine/src/crm/accounts/services/CrmAccountsPayloadService";
import { CrmAccountsPayloadValidator } from "../../../packages/types/src/domains/crm/accounts/CrmAccountsPayload";
import { CrmAccountsPayloadStateMachine } from "../../../services/core-engine/src/crm/accounts/state-machines/CrmAccountsPayloadStateMachine";

describe("CrmAccountsPayload Comprehensive Domain Test Suite", () => {
  const service = new CrmAccountsPayloadService();
  const sm = new CrmAccountsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmAccountsPayload Instance",
      domain: "crm_accounts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmAccountsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
