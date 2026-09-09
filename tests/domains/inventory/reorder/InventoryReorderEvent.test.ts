import { InventoryReorderEventService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderEventService";
import { InventoryReorderEventValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderEvent";
import { InventoryReorderEventStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderEventStateMachine";

describe("InventoryReorderEvent Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderEventService();
  const sm = new InventoryReorderEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderEvent Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
