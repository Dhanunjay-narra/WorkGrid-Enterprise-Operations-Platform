import { InventoryWarehouseScheduleService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseScheduleService";
import { InventoryWarehouseScheduleValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseSchedule";
import { InventoryWarehouseScheduleStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseScheduleStateMachine";

describe("InventoryWarehouseSchedule Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseScheduleService();
  const sm = new InventoryWarehouseScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseSchedule Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
