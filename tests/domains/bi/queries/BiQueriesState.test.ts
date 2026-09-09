import { BiQueriesStateService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesStateService";
import { BiQueriesStateValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesState";
import { BiQueriesStateStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesStateStateMachine";

describe("BiQueriesState Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesStateService();
  const sm = new BiQueriesStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesState Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
