import { BiCohortsEntryService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsEntryService";
import { BiCohortsEntryValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsEntry";
import { BiCohortsEntryStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsEntryStateMachine";

describe("BiCohortsEntry Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsEntryService();
  const sm = new BiCohortsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsEntry Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
