import { InventoryReorderTransactionService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderTransactionService";
import { InventoryReorderTransactionValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderTransaction";
import { InventoryReorderTransactionStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderTransactionStateMachine";

describe("InventoryReorderTransaction Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderTransactionService();
  const sm = new InventoryReorderTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderTransaction Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
