import { DmsSignaturesItemService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesItemService";
import { DmsSignaturesItemValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesItem";
import { DmsSignaturesItemStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesItemStateMachine";

describe("DmsSignaturesItem Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesItemService();
  const sm = new DmsSignaturesItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesItem Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
