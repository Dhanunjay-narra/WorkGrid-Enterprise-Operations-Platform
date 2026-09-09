import { InventoryWarehouseStateService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseStateService";
import { InventoryWarehouseStateValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseState";
import { InventoryWarehouseStateStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseStateStateMachine";

describe("InventoryWarehouseState Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseStateService();
  const sm = new InventoryWarehouseStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseState Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
