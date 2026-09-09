import { SupportAgentsSessionService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsSessionService";
import { SupportAgentsSessionValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsSession";
import { SupportAgentsSessionStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsSessionStateMachine";

describe("SupportAgentsSession Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsSessionService();
  const sm = new SupportAgentsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsSession Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
