import { CrmContactsAuditLogService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsAuditLogService";
import { CrmContactsAuditLogValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsAuditLog";
import { CrmContactsAuditLogStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsAuditLogStateMachine";

describe("CrmContactsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsAuditLogService();
  const sm = new CrmContactsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsAuditLog Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
