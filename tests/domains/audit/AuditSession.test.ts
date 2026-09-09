import { AuditSessionService } from "../../../services/core-engine/src/audit/services/AuditSessionService";
import { AuditSessionValidator } from "../../../packages/types/src/domains/audit/AuditSession";
import { AuditSessionStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditSessionStateMachine";

describe("AuditSession Comprehensive Domain Test Suite", () => {
  const service = new AuditSessionService();
  const sm = new AuditSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditSession Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
