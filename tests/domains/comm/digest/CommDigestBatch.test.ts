import { CommDigestBatchService } from "../../../services/core-engine/src/comm/digest/services/CommDigestBatchService";
import { CommDigestBatchValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestBatch";
import { CommDigestBatchStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestBatchStateMachine";

describe("CommDigestBatch Comprehensive Domain Test Suite", () => {
  const service = new CommDigestBatchService();
  const sm = new CommDigestBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestBatch Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
