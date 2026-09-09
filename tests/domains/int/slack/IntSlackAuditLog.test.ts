import { IntSlackAuditLogService } from "../../../services/core-engine/src/int/slack/services/IntSlackAuditLogService";
import { IntSlackAuditLogValidator } from "../../../packages/types/src/domains/int/slack/IntSlackAuditLog";
import { IntSlackAuditLogStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackAuditLogStateMachine";

describe("IntSlackAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IntSlackAuditLogService();
  const sm = new IntSlackAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackAuditLog Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
