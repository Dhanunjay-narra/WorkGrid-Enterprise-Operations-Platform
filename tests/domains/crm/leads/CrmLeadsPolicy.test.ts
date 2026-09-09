import { CrmLeadsPolicyService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsPolicyService";
import { CrmLeadsPolicyValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsPolicy";
import { CrmLeadsPolicyStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsPolicyStateMachine";

describe("CrmLeadsPolicy Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsPolicyService();
  const sm = new CrmLeadsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsPolicy Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
