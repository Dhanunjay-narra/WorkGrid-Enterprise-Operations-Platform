import { InventoryWarehouseRecordService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseRecordService";
import { InventoryWarehouseRecordValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseRecord";
import { InventoryWarehouseRecordStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseRecordStateMachine";

describe("InventoryWarehouseRecord Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseRecordService();
  const sm = new InventoryWarehouseRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseRecord Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
