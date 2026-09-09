import { BiQueriesSummaryService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesSummaryService";
import { BiQueriesSummaryValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesSummary";
import { BiQueriesSummaryStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesSummaryStateMachine";

describe("BiQueriesSummary Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesSummaryService();
  const sm = new BiQueriesSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesSummary Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
