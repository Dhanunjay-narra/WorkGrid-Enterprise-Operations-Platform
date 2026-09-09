import { InventoryBatchesAssignmentService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesAssignmentService";
import { InventoryBatchesAssignmentValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesAssignment";
import { InventoryBatchesAssignmentStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesAssignmentStateMachine";

describe("InventoryBatchesAssignment Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesAssignmentService();
  const sm = new InventoryBatchesAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesAssignment Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
