import { InventorySuppliersEventService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersEventService";
import { InventorySuppliersEventValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersEvent";
import { InventorySuppliersEventStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersEventStateMachine";

describe("InventorySuppliersEvent Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersEventService();
  const sm = new InventorySuppliersEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersEvent Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
