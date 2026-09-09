import { BiCohortsItemService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsItemService";
import { BiCohortsItemValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsItem";
import { BiCohortsItemStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsItemStateMachine";

describe("BiCohortsItem Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsItemService();
  const sm = new BiCohortsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsItem Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
