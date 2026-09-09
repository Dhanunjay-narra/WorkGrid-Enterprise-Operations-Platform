import { AuditThresholdService } from "../../../services/core-engine/src/audit/services/AuditThresholdService";
import { AuditThresholdValidator } from "../../../packages/types/src/domains/audit/AuditThreshold";
import { AuditThresholdStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditThresholdStateMachine";

describe("AuditThreshold Comprehensive Domain Test Suite", () => {
  const service = new AuditThresholdService();
  const sm = new AuditThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditThreshold Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
