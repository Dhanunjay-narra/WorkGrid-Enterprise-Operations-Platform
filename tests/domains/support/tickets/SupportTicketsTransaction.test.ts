import { SupportTicketsTransactionService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsTransactionService";
import { SupportTicketsTransactionValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsTransaction";
import { SupportTicketsTransactionStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsTransactionStateMachine";

describe("SupportTicketsTransaction Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsTransactionService();
  const sm = new SupportTicketsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsTransaction Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
