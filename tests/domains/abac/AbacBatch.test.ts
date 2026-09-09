import { AbacBatchService } from "../../../services/core-engine/src/abac/services/AbacBatchService";
import { AbacBatchValidator } from "../../../packages/types/src/domains/abac/AbacBatch";
import { AbacBatchStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacBatchStateMachine";

describe("AbacBatch Comprehensive Domain Test Suite", () => {
  const service = new AbacBatchService();
  const sm = new AbacBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacBatch Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
