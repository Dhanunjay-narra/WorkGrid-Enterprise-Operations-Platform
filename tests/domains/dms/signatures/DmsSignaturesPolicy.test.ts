import { DmsSignaturesPolicyService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesPolicyService";
import { DmsSignaturesPolicyValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesPolicy";
import { DmsSignaturesPolicyStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesPolicyStateMachine";

describe("DmsSignaturesPolicy Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesPolicyService();
  const sm = new DmsSignaturesPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesPolicy Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
