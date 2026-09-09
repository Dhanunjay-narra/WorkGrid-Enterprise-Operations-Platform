import { ComplianceConfigService } from "../../../services/core-engine/src/compliance/services/ComplianceConfigService";
import { ComplianceConfigValidator } from "../../../packages/types/src/domains/compliance/ComplianceConfig";
import { ComplianceConfigStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceConfigStateMachine";

describe("ComplianceConfig Comprehensive Domain Test Suite", () => {
  const service = new ComplianceConfigService();
  const sm = new ComplianceConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceConfig Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
