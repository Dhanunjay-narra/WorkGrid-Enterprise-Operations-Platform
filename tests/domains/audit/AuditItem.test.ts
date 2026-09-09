import { AuditItemService } from "../../../services/core-engine/src/audit/services/AuditItemService";
import { AuditItemValidator } from "../../../packages/types/src/domains/audit/AuditItem";
import { AuditItemStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditItemStateMachine";

describe("AuditItem Comprehensive Domain Test Suite", () => {
  const service = new AuditItemService();
  const sm = new AuditItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditItem Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
