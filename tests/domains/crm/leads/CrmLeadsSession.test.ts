import { CrmLeadsSessionService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsSessionService";
import { CrmLeadsSessionValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsSession";
import { CrmLeadsSessionStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsSessionStateMachine";

describe("CrmLeadsSession Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsSessionService();
  const sm = new CrmLeadsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsSession Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
