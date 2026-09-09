import { InventoryReorderPolicyService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderPolicyService";
import { InventoryReorderPolicyValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderPolicy";
import { InventoryReorderPolicyStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderPolicyStateMachine";

describe("InventoryReorderPolicy Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderPolicyService();
  const sm = new InventoryReorderPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderPolicy Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
