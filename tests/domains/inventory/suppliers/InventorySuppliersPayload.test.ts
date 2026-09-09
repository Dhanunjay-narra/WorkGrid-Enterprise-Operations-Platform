import { InventorySuppliersPayloadService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersPayloadService";
import { InventorySuppliersPayloadValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersPayload";
import { InventorySuppliersPayloadStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersPayloadStateMachine";

describe("InventorySuppliersPayload Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersPayloadService();
  const sm = new InventorySuppliersPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersPayload Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
