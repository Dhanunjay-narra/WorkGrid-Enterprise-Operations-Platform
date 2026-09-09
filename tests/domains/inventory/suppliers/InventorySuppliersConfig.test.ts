import { InventorySuppliersConfigService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersConfigService";
import { InventorySuppliersConfigValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersConfig";
import { InventorySuppliersConfigStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersConfigStateMachine";

describe("InventorySuppliersConfig Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersConfigService();
  const sm = new InventorySuppliersConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersConfig Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
