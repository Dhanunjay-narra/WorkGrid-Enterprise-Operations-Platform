import { AuditSnapshotService } from "../../../services/core-engine/src/audit/services/AuditSnapshotService";
import { AuditSnapshotValidator } from "../../../packages/types/src/domains/audit/AuditSnapshot";
import { AuditSnapshotStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditSnapshotStateMachine";

describe("AuditSnapshot Comprehensive Domain Test Suite", () => {
  const service = new AuditSnapshotService();
  const sm = new AuditSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditSnapshot Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
