import { AuditConfigService } from "../../../services/core-engine/src/audit/services/AuditConfigService";
import { AuditConfigValidator } from "../../../packages/types/src/domains/audit/AuditConfig";
import { AuditConfigStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditConfigStateMachine";

describe("AuditConfig Comprehensive Domain Test Suite", () => {
  const service = new AuditConfigService();
  const sm = new AuditConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditConfig Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
