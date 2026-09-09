import { ComplianceReportService } from "../../../services/core-engine/src/compliance/services/ComplianceReportService";
import { ComplianceReportValidator } from "../../../packages/types/src/domains/compliance/ComplianceReport";
import { ComplianceReportStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceReportStateMachine";

describe("ComplianceReport Comprehensive Domain Test Suite", () => {
  const service = new ComplianceReportService();
  const sm = new ComplianceReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceReport Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
