import { InventorySuppliersNodeService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersNodeService";
import { InventorySuppliersNodeValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersNode";
import { InventorySuppliersNodeStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersNodeStateMachine";

describe("InventorySuppliersNode Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersNodeService();
  const sm = new InventorySuppliersNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersNode Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
