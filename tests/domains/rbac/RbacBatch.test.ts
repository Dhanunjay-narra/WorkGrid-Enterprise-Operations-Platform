import { RbacBatchService } from "../../../services/core-engine/src/rbac/services/RbacBatchService";
import { RbacBatchValidator } from "../../../packages/types/src/domains/rbac/RbacBatch";
import { RbacBatchStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacBatchStateMachine";

describe("RbacBatch Comprehensive Domain Test Suite", () => {
  const service = new RbacBatchService();
  const sm = new RbacBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacBatch Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
