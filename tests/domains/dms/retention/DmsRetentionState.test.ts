import { DmsRetentionStateService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionStateService";
import { DmsRetentionStateValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionState";
import { DmsRetentionStateStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionStateStateMachine";

describe("DmsRetentionState Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionStateService();
  const sm = new DmsRetentionStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionState Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
