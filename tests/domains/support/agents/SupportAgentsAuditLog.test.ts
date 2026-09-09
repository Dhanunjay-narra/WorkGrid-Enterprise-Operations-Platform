import { SupportAgentsAuditLogService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsAuditLogService";
import { SupportAgentsAuditLogValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsAuditLog";
import { SupportAgentsAuditLogStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsAuditLogStateMachine";

describe("SupportAgentsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsAuditLogService();
  const sm = new SupportAgentsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsAuditLog Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
