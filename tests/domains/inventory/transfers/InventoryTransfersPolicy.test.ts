import { InventoryTransfersPolicyService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersPolicyService";
import { InventoryTransfersPolicyValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersPolicy";
import { InventoryTransfersPolicyStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersPolicyStateMachine";

describe("InventoryTransfersPolicy Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersPolicyService();
  const sm = new InventoryTransfersPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersPolicy Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
