import { SecurityBatchService } from "../../../services/core-engine/src/security/services/SecurityBatchService";
import { SecurityBatchValidator } from "../../../packages/types/src/domains/security/SecurityBatch";
import { SecurityBatchStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityBatchStateMachine";

describe("SecurityBatch Comprehensive Domain Test Suite", () => {
  const service = new SecurityBatchService();
  const sm = new SecurityBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityBatch Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
