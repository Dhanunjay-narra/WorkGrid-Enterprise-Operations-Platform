import { DmsRetentionThresholdService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionThresholdService";
import { DmsRetentionThresholdValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionThreshold";
import { DmsRetentionThresholdStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionThresholdStateMachine";

describe("DmsRetentionThreshold Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionThresholdService();
  const sm = new DmsRetentionThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionThreshold Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
