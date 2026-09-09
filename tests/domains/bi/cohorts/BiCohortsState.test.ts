import { BiCohortsStateService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsStateService";
import { BiCohortsStateValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsState";
import { BiCohortsStateStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsStateStateMachine";

describe("BiCohortsState Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsStateService();
  const sm = new BiCohortsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsState Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
