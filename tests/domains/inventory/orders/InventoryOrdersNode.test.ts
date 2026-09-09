import { InventoryOrdersNodeService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersNodeService";
import { InventoryOrdersNodeValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersNode";
import { InventoryOrdersNodeStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersNodeStateMachine";

describe("InventoryOrdersNode Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersNodeService();
  const sm = new InventoryOrdersNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersNode Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
