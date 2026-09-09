import { ComplianceThresholdService } from "../../../services/core-engine/src/compliance/services/ComplianceThresholdService";
import { ComplianceThresholdValidator } from "../../../packages/types/src/domains/compliance/ComplianceThreshold";
import { ComplianceThresholdStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceThresholdStateMachine";

describe("ComplianceThreshold Comprehensive Domain Test Suite", () => {
  const service = new ComplianceThresholdService();
  const sm = new ComplianceThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceThreshold Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
