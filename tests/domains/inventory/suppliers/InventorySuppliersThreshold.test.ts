import { InventorySuppliersThresholdService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersThresholdService";
import { InventorySuppliersThresholdValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersThreshold";
import { InventorySuppliersThresholdStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersThresholdStateMachine";

describe("InventorySuppliersThreshold Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersThresholdService();
  const sm = new InventorySuppliersThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersThreshold Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
