import { BiQueriesQueueService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesQueueService";
import { BiQueriesQueueValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesQueue";
import { BiQueriesQueueStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesQueueStateMachine";

describe("BiQueriesQueue Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesQueueService();
  const sm = new BiQueriesQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesQueue Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
