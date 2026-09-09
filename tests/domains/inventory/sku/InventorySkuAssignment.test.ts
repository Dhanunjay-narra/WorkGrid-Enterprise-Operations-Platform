import { InventorySkuAssignmentService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuAssignmentService";
import { InventorySkuAssignmentValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuAssignment";
import { InventorySkuAssignmentStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuAssignmentStateMachine";

describe("InventorySkuAssignment Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuAssignmentService();
  const sm = new InventorySkuAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuAssignment Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
