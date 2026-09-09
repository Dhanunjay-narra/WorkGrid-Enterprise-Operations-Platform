import { AuditMetricService } from "../../../services/core-engine/src/audit/services/AuditMetricService";
import { AuditMetricValidator } from "../../../packages/types/src/domains/audit/AuditMetric";
import { AuditMetricStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditMetricStateMachine";

describe("AuditMetric Comprehensive Domain Test Suite", () => {
  const service = new AuditMetricService();
  const sm = new AuditMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditMetric Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
