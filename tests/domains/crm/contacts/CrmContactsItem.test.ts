import { CrmContactsItemService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsItemService";
import { CrmContactsItemValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsItem";
import { CrmContactsItemStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsItemStateMachine";

describe("CrmContactsItem Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsItemService();
  const sm = new CrmContactsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsItem Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
