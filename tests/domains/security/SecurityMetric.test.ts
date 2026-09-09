import { SecurityMetricService } from "../../../services/core-engine/src/security/services/SecurityMetricService";
import { SecurityMetricValidator } from "../../../packages/types/src/domains/security/SecurityMetric";
import { SecurityMetricStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityMetricStateMachine";

describe("SecurityMetric Comprehensive Domain Test Suite", () => {
  const service = new SecurityMetricService();
  const sm = new SecurityMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityMetric Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
