import { BiCohortsProfileService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsProfileService";
import { BiCohortsProfileValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsProfile";
import { BiCohortsProfileStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsProfileStateMachine";

describe("BiCohortsProfile Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsProfileService();
  const sm = new BiCohortsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsProfile Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
