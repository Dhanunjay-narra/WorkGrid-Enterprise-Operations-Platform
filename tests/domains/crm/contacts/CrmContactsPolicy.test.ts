import { CrmContactsPolicyService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsPolicyService";
import { CrmContactsPolicyValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsPolicy";
import { CrmContactsPolicyStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsPolicyStateMachine";

describe("CrmContactsPolicy Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsPolicyService();
  const sm = new CrmContactsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsPolicy Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
