import { SupportTicketsStateService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsStateService";
import { SupportTicketsStateValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsState";
import { SupportTicketsStateStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsStateStateMachine";

describe("SupportTicketsState Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsStateService();
  const sm = new SupportTicketsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsState Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
