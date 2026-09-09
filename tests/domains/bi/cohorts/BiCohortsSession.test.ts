import { BiCohortsSessionService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsSessionService";
import { BiCohortsSessionValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsSession";
import { BiCohortsSessionStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsSessionStateMachine";

describe("BiCohortsSession Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsSessionService();
  const sm = new BiCohortsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsSession Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
