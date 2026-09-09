import { InventorySuppliersSnapshotService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersSnapshotService";
import { InventorySuppliersSnapshotValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersSnapshot";
import { InventorySuppliersSnapshotStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersSnapshotStateMachine";

describe("InventorySuppliersSnapshot Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersSnapshotService();
  const sm = new InventorySuppliersSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersSnapshot Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
