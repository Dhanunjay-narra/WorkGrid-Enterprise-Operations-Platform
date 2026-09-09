import { InventoryStockRuleService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockRuleService";
import { InventoryStockRuleValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockRule";
import { InventoryStockRuleStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockRuleStateMachine";

describe("InventoryStockRule Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockRuleService();
  const sm = new InventoryStockRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockRule Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
