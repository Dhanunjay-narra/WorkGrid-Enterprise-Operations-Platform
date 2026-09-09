import { CrmContactsEventService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsEventService";
import { CrmContactsEventValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsEvent";
import { CrmContactsEventStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsEventStateMachine";

describe("CrmContactsEvent Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsEventService();
  const sm = new CrmContactsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsEvent Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
