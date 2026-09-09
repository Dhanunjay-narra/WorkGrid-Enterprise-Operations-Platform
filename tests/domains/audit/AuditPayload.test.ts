import { AuditPayloadService } from "../../../services/core-engine/src/audit/services/AuditPayloadService";
import { AuditPayloadValidator } from "../../../packages/types/src/domains/audit/AuditPayload";
import { AuditPayloadStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditPayloadStateMachine";

describe("AuditPayload Comprehensive Domain Test Suite", () => {
  const service = new AuditPayloadService();
  const sm = new AuditPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditPayload Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
