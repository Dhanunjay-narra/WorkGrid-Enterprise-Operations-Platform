import { ComplianceMetricService } from "../../../services/core-engine/src/compliance/services/ComplianceMetricService";
import { ComplianceMetricValidator } from "../../../packages/types/src/domains/compliance/ComplianceMetric";
import { ComplianceMetricStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceMetricStateMachine";

describe("ComplianceMetric Comprehensive Domain Test Suite", () => {
  const service = new ComplianceMetricService();
  const sm = new ComplianceMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceMetric Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
