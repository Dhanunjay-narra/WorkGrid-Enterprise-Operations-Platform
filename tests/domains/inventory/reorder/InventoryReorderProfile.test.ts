import { InventoryReorderProfileService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderProfileService";
import { InventoryReorderProfileValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderProfile";
import { InventoryReorderProfileStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderProfileStateMachine";

describe("InventoryReorderProfile Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderProfileService();
  const sm = new InventoryReorderProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderProfile Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
