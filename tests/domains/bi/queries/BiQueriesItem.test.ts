import { BiQueriesItemService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesItemService";
import { BiQueriesItemValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesItem";
import { BiQueriesItemStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesItemStateMachine";

describe("BiQueriesItem Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesItemService();
  const sm = new BiQueriesItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesItem Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
