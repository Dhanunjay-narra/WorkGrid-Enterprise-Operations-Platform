import { InventoryStockPolicyService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockPolicyService";
import { InventoryStockPolicyValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockPolicy";
import { InventoryStockPolicyStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockPolicyStateMachine";

describe("InventoryStockPolicy Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockPolicyService();
  const sm = new InventoryStockPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockPolicy Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
