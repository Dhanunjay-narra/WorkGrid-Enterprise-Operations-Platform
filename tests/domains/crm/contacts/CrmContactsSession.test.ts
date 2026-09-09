import { CrmContactsSessionService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsSessionService";
import { CrmContactsSessionValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsSession";
import { CrmContactsSessionStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsSessionStateMachine";

describe("CrmContactsSession Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsSessionService();
  const sm = new CrmContactsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsSession Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
