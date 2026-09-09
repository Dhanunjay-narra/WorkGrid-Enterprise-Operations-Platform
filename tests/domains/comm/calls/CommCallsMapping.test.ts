import { CommCallsMappingService } from "../../../services/core-engine/src/comm/calls/services/CommCallsMappingService";
import { CommCallsMappingValidator } from "../../../packages/types/src/domains/comm/calls/CommCallsMapping";
import { CommCallsMappingStateMachine } from "../../../services/core-engine/src/comm/calls/state-machines/CommCallsMappingStateMachine";

describe("CommCallsMapping Comprehensive Domain Test Suite", () => {
  const service = new CommCallsMappingService();
  const sm = new CommCallsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommCallsMapping Instance",
      domain: "comm_calls",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommCallsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
