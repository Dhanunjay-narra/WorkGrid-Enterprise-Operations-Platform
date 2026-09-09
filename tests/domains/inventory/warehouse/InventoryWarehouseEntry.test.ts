import { InventoryWarehouseEntryService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseEntryService";
import { InventoryWarehouseEntryValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseEntry";
import { InventoryWarehouseEntryStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseEntryStateMachine";

describe("InventoryWarehouseEntry Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseEntryService();
  const sm = new InventoryWarehouseEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseEntry Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
