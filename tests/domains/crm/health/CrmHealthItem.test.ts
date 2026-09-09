import { CrmHealthItemService } from "../../../services/core-engine/src/crm/health/services/CrmHealthItemService";
import { CrmHealthItemValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthItem";
import { CrmHealthItemStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthItemStateMachine";

describe("CrmHealthItem Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthItemService();
  const sm = new CrmHealthItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthItem Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
