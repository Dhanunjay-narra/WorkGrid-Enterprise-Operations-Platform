import { SupportCsatTransactionService } from "../../../services/core-engine/src/support/csat/services/SupportCsatTransactionService";
import { SupportCsatTransactionValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatTransaction";
import { SupportCsatTransactionStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatTransactionStateMachine";

describe("SupportCsatTransaction Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatTransactionService();
  const sm = new SupportCsatTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatTransaction Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
