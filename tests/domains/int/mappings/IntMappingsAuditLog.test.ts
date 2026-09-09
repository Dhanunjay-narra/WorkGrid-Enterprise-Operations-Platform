import { IntMappingsAuditLogService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsAuditLogService";
import { IntMappingsAuditLogValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsAuditLog";
import { IntMappingsAuditLogStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsAuditLogStateMachine";

describe("IntMappingsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsAuditLogService();
  const sm = new IntMappingsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsAuditLog Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
