import { SupportTicketsPolicyService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsPolicyService";
import { SupportTicketsPolicyValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsPolicy";
import { SupportTicketsPolicyStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsPolicyStateMachine";

describe("SupportTicketsPolicy Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsPolicyService();
  const sm = new SupportTicketsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsPolicy Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
