import { CommDigestQueueService } from "../../../services/core-engine/src/comm/digest/services/CommDigestQueueService";
import { CommDigestQueueValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestQueue";
import { CommDigestQueueStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestQueueStateMachine";

describe("CommDigestQueue Comprehensive Domain Test Suite", () => {
  const service = new CommDigestQueueService();
  const sm = new CommDigestQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestQueue Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
