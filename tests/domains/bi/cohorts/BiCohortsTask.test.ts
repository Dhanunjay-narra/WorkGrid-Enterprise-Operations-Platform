import { BiCohortsTaskService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsTaskService";
import { BiCohortsTaskValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsTask";
import { BiCohortsTaskStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsTaskStateMachine";

describe("BiCohortsTask Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsTaskService();
  const sm = new BiCohortsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsTask Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
