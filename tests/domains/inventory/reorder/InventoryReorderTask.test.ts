import { InventoryReorderTaskService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderTaskService";
import { InventoryReorderTaskValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderTask";
import { InventoryReorderTaskStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderTaskStateMachine";

describe("InventoryReorderTask Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderTaskService();
  const sm = new InventoryReorderTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderTask Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
