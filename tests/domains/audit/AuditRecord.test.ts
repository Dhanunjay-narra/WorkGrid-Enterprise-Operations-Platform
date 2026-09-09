import { AuditRecordService } from "../../../services/core-engine/src/audit/services/AuditRecordService";
import { AuditRecordValidator } from "../../../packages/types/src/domains/audit/AuditRecord";
import { AuditRecordStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditRecordStateMachine";

describe("AuditRecord Comprehensive Domain Test Suite", () => {
  const service = new AuditRecordService();
  const sm = new AuditRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditRecord Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
