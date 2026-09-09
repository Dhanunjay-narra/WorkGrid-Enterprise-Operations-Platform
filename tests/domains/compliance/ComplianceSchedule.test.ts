import { ComplianceScheduleService } from "../../../services/core-engine/src/compliance/services/ComplianceScheduleService";
import { ComplianceScheduleValidator } from "../../../packages/types/src/domains/compliance/ComplianceSchedule";
import { ComplianceScheduleStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceScheduleStateMachine";

describe("ComplianceSchedule Comprehensive Domain Test Suite", () => {
  const service = new ComplianceScheduleService();
  const sm = new ComplianceScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceSchedule Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
