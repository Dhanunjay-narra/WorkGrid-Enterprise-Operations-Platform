import { SupportTicketsMetricService } from "../../../services/core-engine/src/support/tickets/services/SupportTicketsMetricService";
import { SupportTicketsMetricValidator } from "../../../packages/types/src/domains/support/tickets/SupportTicketsMetric";
import { SupportTicketsMetricStateMachine } from "../../../services/core-engine/src/support/tickets/state-machines/SupportTicketsMetricStateMachine";

describe("SupportTicketsMetric Comprehensive Domain Test Suite", () => {
  const service = new SupportTicketsMetricService();
  const sm = new SupportTicketsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportTicketsMetric Instance",
      domain: "support_tickets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportTicketsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
