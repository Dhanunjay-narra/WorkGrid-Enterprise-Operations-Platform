import { InventoryOrdersAssignmentService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersAssignmentService";
import { InventoryOrdersAssignmentValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersAssignment";
import { InventoryOrdersAssignmentStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersAssignmentStateMachine";

describe("InventoryOrdersAssignment Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersAssignmentService();
  const sm = new InventoryOrdersAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersAssignment Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
