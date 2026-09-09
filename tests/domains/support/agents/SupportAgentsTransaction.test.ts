import { SupportAgentsTransactionService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsTransactionService";
import { SupportAgentsTransactionValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsTransaction";
import { SupportAgentsTransactionStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsTransactionStateMachine";

describe("SupportAgentsTransaction Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsTransactionService();
  const sm = new SupportAgentsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsTransaction Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
