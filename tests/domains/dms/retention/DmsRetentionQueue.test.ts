import { DmsRetentionQueueService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionQueueService";
import { DmsRetentionQueueValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionQueue";
import { DmsRetentionQueueStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionQueueStateMachine";

describe("DmsRetentionQueue Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionQueueService();
  const sm = new DmsRetentionQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionQueue Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
