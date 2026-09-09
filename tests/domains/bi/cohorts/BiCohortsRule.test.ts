import { BiCohortsRuleService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsRuleService";
import { BiCohortsRuleValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsRule";
import { BiCohortsRuleStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsRuleStateMachine";

describe("BiCohortsRule Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsRuleService();
  const sm = new BiCohortsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsRule Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
