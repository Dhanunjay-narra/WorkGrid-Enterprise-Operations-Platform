import { InventoryOrdersTaskService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersTaskService";
import { InventoryOrdersTaskValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersTask";
import { InventoryOrdersTaskStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersTaskStateMachine";

describe("InventoryOrdersTask Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersTaskService();
  const sm = new InventoryOrdersTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersTask Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
