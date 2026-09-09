import { SupportTicketsEntryService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsEntryService";
import { SupportTicketsEntryValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsEntry";
import { SupportTicketsEntryStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsEntryStateMachine";

describe("SupportTicketsEntry Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsEntryService();
  const sm = new SupportTicketsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsEntry Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
