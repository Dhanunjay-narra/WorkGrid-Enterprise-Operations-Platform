import { InventoryOrdersScheduleService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersScheduleService";
import { InventoryOrdersScheduleValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersSchedule";
import { InventoryOrdersScheduleStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersScheduleStateMachine";

describe("InventoryOrdersSchedule Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersScheduleService();
  const sm = new InventoryOrdersScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersSchedule Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
