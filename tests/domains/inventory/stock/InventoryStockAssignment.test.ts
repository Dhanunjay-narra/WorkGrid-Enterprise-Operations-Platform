import { InventoryStockAssignmentService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockAssignmentService";
import { InventoryStockAssignmentValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockAssignment";
import { InventoryStockAssignmentStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockAssignmentStateMachine";

describe("InventoryStockAssignment Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockAssignmentService();
  const sm = new InventoryStockAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockAssignment Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
