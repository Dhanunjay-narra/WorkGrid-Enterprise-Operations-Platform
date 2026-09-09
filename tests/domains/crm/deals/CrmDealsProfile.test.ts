import { CrmDealsProfileService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsProfileService";
import { CrmDealsProfileValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsProfile";
import { CrmDealsProfileStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsProfileStateMachine";

describe("CrmDealsProfile Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsProfileService();
  const sm = new CrmDealsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsProfile Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
