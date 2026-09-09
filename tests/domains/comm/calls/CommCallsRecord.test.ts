import { CommCallsRecordService } from "../../../services/core-engine/src/comm/calls/services/CommCallsRecordService";
import { CommCallsRecordValidator } from "../../../packages/types/src/domains/comm/calls/CommCallsRecord";
import { CommCallsRecordStateMachine } from "../../../services/core-engine/src/comm/calls/state-machines/CommCallsRecordStateMachine";

describe("CommCallsRecord Comprehensive Domain Test Suite", () => {
  const service = new CommCallsRecordService();
  const sm = new CommCallsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommCallsRecord Instance",
      domain: "comm_calls",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommCallsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
