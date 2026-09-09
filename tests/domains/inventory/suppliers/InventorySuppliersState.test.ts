import { InventorySuppliersStateService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersStateService";
import { InventorySuppliersStateValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersState";
import { InventorySuppliersStateStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersStateStateMachine";

describe("InventorySuppliersState Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersStateService();
  const sm = new InventorySuppliersStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersState Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
