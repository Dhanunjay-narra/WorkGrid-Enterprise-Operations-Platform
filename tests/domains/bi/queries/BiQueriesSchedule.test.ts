import { BiQueriesScheduleService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesScheduleService";
import { BiQueriesScheduleValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesSchedule";
import { BiQueriesScheduleStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesScheduleStateMachine";

describe("BiQueriesSchedule Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesScheduleService();
  const sm = new BiQueriesScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesSchedule Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
