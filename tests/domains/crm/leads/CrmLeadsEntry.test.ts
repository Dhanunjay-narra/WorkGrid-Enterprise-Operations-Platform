import { CrmLeadsEntryService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsEntryService";
import { CrmLeadsEntryValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsEntry";
import { CrmLeadsEntryStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsEntryStateMachine";

describe("CrmLeadsEntry Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsEntryService();
  const sm = new CrmLeadsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsEntry Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
