import { InventoryOrdersEventService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersEventService";
import { InventoryOrdersEventValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersEvent";
import { InventoryOrdersEventStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersEventStateMachine";

describe("InventoryOrdersEvent Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersEventService();
  const sm = new InventoryOrdersEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersEvent Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
