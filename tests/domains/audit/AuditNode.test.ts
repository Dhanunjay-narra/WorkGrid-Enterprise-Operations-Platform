import { AuditNodeService } from "../../../services/core-engine/src/audit/services/AuditNodeService";
import { AuditNodeValidator } from "../../../packages/types/src/domains/audit/AuditNode";
import { AuditNodeStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditNodeStateMachine";

describe("AuditNode Comprehensive Domain Test Suite", () => {
  const service = new AuditNodeService();
  const sm = new AuditNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditNode Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
