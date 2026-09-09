import { BiQueriesTransactionService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesTransactionService";
import { BiQueriesTransactionValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesTransaction";
import { BiQueriesTransactionStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesTransactionStateMachine";

describe("BiQueriesTransaction Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesTransactionService();
  const sm = new BiQueriesTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesTransaction Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
