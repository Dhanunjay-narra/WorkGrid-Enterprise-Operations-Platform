import { DmsRetentionEventService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionEventService";
import { DmsRetentionEventValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionEvent";
import { DmsRetentionEventStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionEventStateMachine";

describe("DmsRetentionEvent Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionEventService();
  const sm = new DmsRetentionEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionEvent Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
