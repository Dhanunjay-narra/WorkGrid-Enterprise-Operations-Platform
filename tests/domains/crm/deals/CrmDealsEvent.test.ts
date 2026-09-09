import { CrmDealsEventService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsEventService";
import { CrmDealsEventValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsEvent";
import { CrmDealsEventStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsEventStateMachine";

describe("CrmDealsEvent Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsEventService();
  const sm = new CrmDealsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsEvent Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
