import { SupportTicketsBatchService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsBatchService";
import { SupportTicketsBatchValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsBatch";
import { SupportTicketsBatchStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsBatchStateMachine";

describe("SupportTicketsBatch Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsBatchService();
  const sm = new SupportTicketsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsBatch Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
