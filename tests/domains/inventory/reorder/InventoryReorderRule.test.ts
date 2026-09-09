import { InventoryReorderRuleService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderRuleService";
import { InventoryReorderRuleValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderRule";
import { InventoryReorderRuleStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderRuleStateMachine";

describe("InventoryReorderRule Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderRuleService();
  const sm = new InventoryReorderRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderRule Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
