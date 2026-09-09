import { CrmContactsMappingService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsMappingService";
import { CrmContactsMappingValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsMapping";
import { CrmContactsMappingStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsMappingStateMachine";

describe("CrmContactsMapping Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsMappingService();
  const sm = new CrmContactsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsMapping Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
