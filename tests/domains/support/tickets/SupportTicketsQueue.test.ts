import { SupportTicketsQueueService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsQueueService";
import { SupportTicketsQueueValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsQueue";
import { SupportTicketsQueueStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsQueueStateMachine";

describe("SupportTicketsQueue Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsQueueService();
  const sm = new SupportTicketsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsQueue Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
