import { InventorySuppliersTaskService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersTaskService";
import { InventorySuppliersTaskValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersTask";
import { InventorySuppliersTaskStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersTaskStateMachine";

describe("InventorySuppliersTask Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersTaskService();
  const sm = new InventorySuppliersTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersTask Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
