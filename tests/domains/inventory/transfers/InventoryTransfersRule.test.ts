import { InventoryTransfersRuleService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersRuleService";
import { InventoryTransfersRuleValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersRule";
import { InventoryTransfersRuleStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersRuleStateMachine";

describe("InventoryTransfersRule Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersRuleService();
  const sm = new InventoryTransfersRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersRule Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
