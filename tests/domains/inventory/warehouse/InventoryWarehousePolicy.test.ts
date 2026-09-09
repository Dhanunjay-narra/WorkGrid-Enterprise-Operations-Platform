import { InventoryWarehousePolicyService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehousePolicyService";
import { InventoryWarehousePolicyValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehousePolicy";
import { InventoryWarehousePolicyStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehousePolicyStateMachine";

describe("InventoryWarehousePolicy Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehousePolicyService();
  const sm = new InventoryWarehousePolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehousePolicy Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehousePolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
