import { BiCohortsTransactionService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsTransactionService";
import { BiCohortsTransactionValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsTransaction";
import { BiCohortsTransactionStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsTransactionStateMachine";

describe("BiCohortsTransaction Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsTransactionService();
  const sm = new BiCohortsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsTransaction Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
