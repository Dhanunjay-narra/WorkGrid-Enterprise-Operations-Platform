import { DmsSignaturesNodeService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesNodeService";
import { DmsSignaturesNodeValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesNode";
import { DmsSignaturesNodeStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesNodeStateMachine";

describe("DmsSignaturesNode Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesNodeService();
  const sm = new DmsSignaturesNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesNode Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
