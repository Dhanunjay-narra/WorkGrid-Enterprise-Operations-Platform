import { InventoryTransfersAuditLogService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersAuditLogService";
import { InventoryTransfersAuditLogValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersAuditLog";
import { InventoryTransfersAuditLogStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersAuditLogStateMachine";

describe("InventoryTransfersAuditLog Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersAuditLogService();
  const sm = new InventoryTransfersAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersAuditLog Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
