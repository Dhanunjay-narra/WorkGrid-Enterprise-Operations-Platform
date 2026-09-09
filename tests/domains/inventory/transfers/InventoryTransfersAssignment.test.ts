import { InventoryTransfersAssignmentService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersAssignmentService";
import { InventoryTransfersAssignmentValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersAssignment";
import { InventoryTransfersAssignmentStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersAssignmentStateMachine";

describe("InventoryTransfersAssignment Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersAssignmentService();
  const sm = new InventoryTransfersAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersAssignment Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
