import { SupportTicketsReportService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsReportService";
import { SupportTicketsReportValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsReport";
import { SupportTicketsReportStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsReportStateMachine";

describe("SupportTicketsReport Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsReportService();
  const sm = new SupportTicketsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsReport Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
