import { AuditPolicyService } from "../../../services/core-engine/src/audit/services/AuditPolicyService";
import { AuditPolicyValidator } from "../../../packages/types/src/domains/audit/AuditPolicy";
import { AuditPolicyStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditPolicyStateMachine";

describe("AuditPolicy Comprehensive Domain Test Suite", () => {
  const service = new AuditPolicyService();
  const sm = new AuditPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditPolicy Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
