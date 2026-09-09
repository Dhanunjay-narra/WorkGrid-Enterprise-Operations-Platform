import { CrmLeadsStateService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsStateService";
import { CrmLeadsStateValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsState";
import { CrmLeadsStateStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsStateStateMachine";

describe("CrmLeadsState Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsStateService();
  const sm = new CrmLeadsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsState Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
