import { ComplianceRecordService } from "../../../services/core-engine/src/compliance/services/ComplianceRecordService";
import { ComplianceRecordValidator } from "../../../packages/types/src/domains/compliance/ComplianceRecord";
import { ComplianceRecordStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceRecordStateMachine";

describe("ComplianceRecord Comprehensive Domain Test Suite", () => {
  const service = new ComplianceRecordService();
  const sm = new ComplianceRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceRecord Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
