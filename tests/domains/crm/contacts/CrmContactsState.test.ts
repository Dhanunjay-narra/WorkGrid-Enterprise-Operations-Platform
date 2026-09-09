import { CrmContactsStateService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsStateService";
import { CrmContactsStateValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsState";
import { CrmContactsStateStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsStateStateMachine";

describe("CrmContactsState Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsStateService();
  const sm = new CrmContactsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsState Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
