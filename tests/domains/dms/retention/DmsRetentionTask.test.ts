import { DmsRetentionTaskService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionTaskService";
import { DmsRetentionTaskValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionTask";
import { DmsRetentionTaskStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionTaskStateMachine";

describe("DmsRetentionTask Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionTaskService();
  const sm = new DmsRetentionTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionTask Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
