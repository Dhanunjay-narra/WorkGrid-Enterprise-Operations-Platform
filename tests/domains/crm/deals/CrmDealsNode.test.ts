import { CrmDealsNodeService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsNodeService";
import { CrmDealsNodeValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsNode";
import { CrmDealsNodeStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsNodeStateMachine";

describe("CrmDealsNode Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsNodeService();
  const sm = new CrmDealsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsNode Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
