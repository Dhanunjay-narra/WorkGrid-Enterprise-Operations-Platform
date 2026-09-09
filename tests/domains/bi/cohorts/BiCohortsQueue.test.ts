import { BiCohortsQueueService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsQueueService";
import { BiCohortsQueueValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsQueue";
import { BiCohortsQueueStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsQueueStateMachine";

describe("BiCohortsQueue Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsQueueService();
  const sm = new BiCohortsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsQueue Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
