import { CommChannelsAuditLogService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsAuditLogService";
import { CommChannelsAuditLogValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsAuditLog";
import { CommChannelsAuditLogStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsAuditLogStateMachine";

describe("CommChannelsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsAuditLogService();
  const sm = new CommChannelsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsAuditLog Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
