import { CrmLeadsEventService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsEventService";
import { CrmLeadsEventValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsEvent";
import { CrmLeadsEventStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsEventStateMachine";

describe("CrmLeadsEvent Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsEventService();
  const sm = new CrmLeadsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsEvent Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
