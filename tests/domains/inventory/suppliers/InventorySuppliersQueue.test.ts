import { InventorySuppliersQueueService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersQueueService";
import { InventorySuppliersQueueValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersQueue";
import { InventorySuppliersQueueStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersQueueStateMachine";

describe("InventorySuppliersQueue Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersQueueService();
  const sm = new InventorySuppliersQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersQueue Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
