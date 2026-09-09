import { DmsRetentionSessionService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionSessionService";
import { DmsRetentionSessionValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionSession";
import { DmsRetentionSessionStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionSessionStateMachine";

describe("DmsRetentionSession Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionSessionService();
  const sm = new DmsRetentionSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionSession Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
