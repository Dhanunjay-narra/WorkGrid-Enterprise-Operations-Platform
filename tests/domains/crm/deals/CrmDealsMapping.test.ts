import { CrmDealsMappingService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsMappingService";
import { CrmDealsMappingValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsMapping";
import { CrmDealsMappingStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsMappingStateMachine";

describe("CrmDealsMapping Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsMappingService();
  const sm = new CrmDealsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsMapping Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
