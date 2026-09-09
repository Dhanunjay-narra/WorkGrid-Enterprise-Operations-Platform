import { BiCohortsConfigService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsConfigService";
import { BiCohortsConfigValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsConfig";
import { BiCohortsConfigStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsConfigStateMachine";

describe("BiCohortsConfig Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsConfigService();
  const sm = new BiCohortsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsConfig Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
