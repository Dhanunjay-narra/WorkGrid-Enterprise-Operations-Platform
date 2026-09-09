import { InventoryWarehouseProfileService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseProfileService";
import { InventoryWarehouseProfileValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseProfile";
import { InventoryWarehouseProfileStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseProfileStateMachine";

describe("InventoryWarehouseProfile Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseProfileService();
  const sm = new InventoryWarehouseProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseProfile Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
