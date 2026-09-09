import { CrmContactsSummaryService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsSummaryService";
import { CrmContactsSummaryValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsSummary";
import { CrmContactsSummaryStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsSummaryStateMachine";

describe("CrmContactsSummary Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsSummaryService();
  const sm = new CrmContactsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsSummary Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
