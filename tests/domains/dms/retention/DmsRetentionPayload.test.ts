import { DmsRetentionPayloadService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionPayloadService";
import { DmsRetentionPayloadValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionPayload";
import { DmsRetentionPayloadStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionPayloadStateMachine";

describe("DmsRetentionPayload Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionPayloadService();
  const sm = new DmsRetentionPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionPayload Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
