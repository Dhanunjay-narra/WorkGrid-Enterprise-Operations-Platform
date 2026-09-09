import { BiQueriesEventService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesEventService";
import { BiQueriesEventValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesEvent";
import { BiQueriesEventStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesEventStateMachine";

describe("BiQueriesEvent Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesEventService();
  const sm = new BiQueriesEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesEvent Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
