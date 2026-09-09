import { AuditReportService } from "../../../services/core-engine/src/audit/services/AuditReportService";
import { AuditReportValidator } from "../../../packages/types/src/domains/audit/AuditReport";
import { AuditReportStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditReportStateMachine";

describe("AuditReport Comprehensive Domain Test Suite", () => {
  const service = new AuditReportService();
  const sm = new AuditReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditReport Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
