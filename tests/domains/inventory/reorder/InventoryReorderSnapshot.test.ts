import { InventoryReorderSnapshotService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderSnapshotService";
import { InventoryReorderSnapshotValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderSnapshot";
import { InventoryReorderSnapshotStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderSnapshotStateMachine";

describe("InventoryReorderSnapshot Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderSnapshotService();
  const sm = new InventoryReorderSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderSnapshot Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
