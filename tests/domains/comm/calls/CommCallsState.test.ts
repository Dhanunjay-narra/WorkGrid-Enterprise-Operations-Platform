import { CommCallsStateService } from "../../../services/core-engine/src/comm/calls/services/CommCallsStateService";
import { CommCallsStateValidator } from "../../../packages/types/src/domains/comm/calls/CommCallsState";
import { CommCallsStateStateMachine } from "../../../services/core-engine/src/comm/calls/state-machines/CommCallsStateStateMachine";

describe("CommCallsState Comprehensive Domain Test Suite", () => {
  const service = new CommCallsStateService();
  const sm = new CommCallsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommCallsState Instance",
      domain: "comm_calls",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommCallsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
