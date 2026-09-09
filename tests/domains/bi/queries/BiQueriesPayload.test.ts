import { BiQueriesPayloadService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesPayloadService";
import { BiQueriesPayloadValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesPayload";
import { BiQueriesPayloadStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesPayloadStateMachine";

describe("BiQueriesPayload Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesPayloadService();
  const sm = new BiQueriesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesPayload Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
