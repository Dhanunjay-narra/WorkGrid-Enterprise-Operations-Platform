import { InventoryReorderQueueService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderQueueService";
import { InventoryReorderQueueValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderQueue";
import { InventoryReorderQueueStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderQueueStateMachine";

describe("InventoryReorderQueue Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderQueueService();
  const sm = new InventoryReorderQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderQueue Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
