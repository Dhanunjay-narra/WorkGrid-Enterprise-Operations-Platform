import { InventoryWarehouseNodeService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseNodeService";
import { InventoryWarehouseNodeValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseNode";
import { InventoryWarehouseNodeStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseNodeStateMachine";

describe("InventoryWarehouseNode Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseNodeService();
  const sm = new InventoryWarehouseNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseNode Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
