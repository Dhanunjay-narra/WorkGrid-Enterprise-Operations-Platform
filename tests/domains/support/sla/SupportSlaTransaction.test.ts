import { SupportSlaTransactionService } from "../../../services/core-engine/src/support/sla/services/SupportSlaTransactionService";
import { SupportSlaTransactionValidator } from "../../../packages/types/src/domains/support/sla/SupportSlaTransaction";
import { SupportSlaTransactionStateMachine } from "../../../services/core-engine/src/support/sla/state-machines/SupportSlaTransactionStateMachine";

describe("SupportSlaTransaction Comprehensive Domain Test Suite", () => {
  const service = new SupportSlaTransactionService();
  const sm = new SupportSlaTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSlaTransaction Instance",
      domain: "support_sla",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSlaTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
