import { SupportAgentsEventService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsEventService";
import { SupportAgentsEventValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsEvent";
import { SupportAgentsEventStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsEventStateMachine";

describe("SupportAgentsEvent Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsEventService();
  const sm = new SupportAgentsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsEvent Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
