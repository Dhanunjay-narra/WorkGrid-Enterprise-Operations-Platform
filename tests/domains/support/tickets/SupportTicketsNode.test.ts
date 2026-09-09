import { SupportTicketsNodeService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsNodeService";
import { SupportTicketsNodeValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsNode";
import { SupportTicketsNodeStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsNodeStateMachine";

describe("SupportTicketsNode Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsNodeService();
  const sm = new SupportTicketsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsNode Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
