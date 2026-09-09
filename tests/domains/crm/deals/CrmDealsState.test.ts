import { CrmDealsStateService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsStateService";
import { CrmDealsStateValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsState";
import { CrmDealsStateStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsStateStateMachine";

describe("CrmDealsState Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsStateService();
  const sm = new CrmDealsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsState Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
