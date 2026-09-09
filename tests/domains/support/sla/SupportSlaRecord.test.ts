import { SupportSlaRecordService } from "../../../services/core-engine/src/support/sla/services/SupportSlaRecordService";
import { SupportSlaRecordValidator } from "../../../packages/types/src/domains/support/sla/SupportSlaRecord";
import { SupportSlaRecordStateMachine } from "../../../services/core-engine/src/support/sla/state-machines/SupportSlaRecordStateMachine";

describe("SupportSlaRecord Comprehensive Domain Test Suite", () => {
  const service = new SupportSlaRecordService();
  const sm = new SupportSlaRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSlaRecord Instance",
      domain: "support_sla",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSlaRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
