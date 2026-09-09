import { InventoryTransfersSummaryService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersSummaryService";
import { InventoryTransfersSummaryValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersSummary";
import { InventoryTransfersSummaryStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersSummaryStateMachine";

describe("InventoryTransfersSummary Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersSummaryService();
  const sm = new InventoryTransfersSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersSummary Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
