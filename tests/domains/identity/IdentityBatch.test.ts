import { IdentityBatchService } from "../../../services/core-engine/src/identity/services/IdentityBatchService";
import { IdentityBatchValidator } from "../../../packages/types/src/domains/identity/IdentityBatch";
import { IdentityBatchStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityBatchStateMachine";

describe("IdentityBatch Comprehensive Domain Test Suite", () => {
  const service = new IdentityBatchService();
  const sm = new IdentityBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityBatch Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
