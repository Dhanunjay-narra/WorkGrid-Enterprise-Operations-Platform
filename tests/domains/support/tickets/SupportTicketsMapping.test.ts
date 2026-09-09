import { SupportTicketsMappingService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsMappingService";
import { SupportTicketsMappingValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsMapping";
import { SupportTicketsMappingStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsMappingStateMachine";

describe("SupportTicketsMapping Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsMappingService();
  const sm = new SupportTicketsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsMapping Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
