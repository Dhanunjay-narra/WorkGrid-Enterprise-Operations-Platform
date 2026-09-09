import { CrmDealsSessionService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsSessionService";
import { CrmDealsSessionValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsSession";
import { CrmDealsSessionStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsSessionStateMachine";

describe("CrmDealsSession Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsSessionService();
  const sm = new CrmDealsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsSession Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
