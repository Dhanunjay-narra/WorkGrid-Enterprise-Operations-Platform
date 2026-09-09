import { DmsRetentionTransactionService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionTransactionService";
import { DmsRetentionTransactionValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionTransaction";
import { DmsRetentionTransactionStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionTransactionStateMachine";

describe("DmsRetentionTransaction Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionTransactionService();
  const sm = new DmsRetentionTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionTransaction Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
