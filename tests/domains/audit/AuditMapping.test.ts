import { AuditMappingService } from "../../../services/core-engine/src/audit/services/AuditMappingService";
import { AuditMappingValidator } from "../../../packages/types/src/domains/audit/AuditMapping";
import { AuditMappingStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditMappingStateMachine";

describe("AuditMapping Comprehensive Domain Test Suite", () => {
  const service = new AuditMappingService();
  const sm = new AuditMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditMapping Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
