import { ObsLoggingRuleService } from "../../../services/core-engine/src/obs/logging/services/ObsLoggingRuleService";
import { ObsLoggingRuleValidator } from "../../../packages/types/src/domains/obs/logging/ObsLoggingRule";
import { ObsLoggingRuleStateMachine } from "../../../services/core-engine/src/obs/logging/state-machines/ObsLoggingRuleStateMachine";

describe("ObsLoggingRule Comprehensive Domain Test Suite", () => {
  const service = new ObsLoggingRuleService();
  const sm = new ObsLoggingRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsLoggingRule Instance",
      domain: "obs_logging",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsLoggingRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
