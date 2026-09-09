import { InventoryWarehouseConfigService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseConfigService";
import { InventoryWarehouseConfigValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseConfig";
import { InventoryWarehouseConfigStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseConfigStateMachine";

describe("InventoryWarehouseConfig Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseConfigService();
  const sm = new InventoryWarehouseConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseConfig Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
