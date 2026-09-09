import { AuditScheduleService } from "../../../services/core-engine/src/audit/services/AuditScheduleService";
import { AuditScheduleValidator } from "../../../packages/types/src/domains/audit/AuditSchedule";
import { AuditScheduleStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditScheduleStateMachine";

describe("AuditSchedule Comprehensive Domain Test Suite", () => {
  const service = new AuditScheduleService();
  const sm = new AuditScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditSchedule Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
