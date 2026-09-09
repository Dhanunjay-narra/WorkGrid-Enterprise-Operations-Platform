import { DmsSignaturesBatchService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesBatchService";
import { DmsSignaturesBatchValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesBatch";
import { DmsSignaturesBatchStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesBatchStateMachine";

describe("DmsSignaturesBatch Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesBatchService();
  const sm = new DmsSignaturesBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesBatch Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
