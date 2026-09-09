import { SupportAgentsSummaryService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsSummaryService";
import { SupportAgentsSummaryValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsSummary";
import { SupportAgentsSummaryStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsSummaryStateMachine";

describe("SupportAgentsSummary Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsSummaryService();
  const sm = new SupportAgentsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsSummary Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
