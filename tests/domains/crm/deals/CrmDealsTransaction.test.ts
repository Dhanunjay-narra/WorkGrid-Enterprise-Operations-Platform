import { CrmDealsTransactionService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsTransactionService";
import { CrmDealsTransactionValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsTransaction";
import { CrmDealsTransactionStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsTransactionStateMachine";

describe("CrmDealsTransaction Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsTransactionService();
  const sm = new CrmDealsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsTransaction Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
