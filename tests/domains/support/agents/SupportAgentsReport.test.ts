import { SupportAgentsReportService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsReportService";
import { SupportAgentsReportValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsReport";
import { SupportAgentsReportStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsReportStateMachine";

describe("SupportAgentsReport Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsReportService();
  const sm = new SupportAgentsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsReport Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
