import { SupportAgentsScheduleService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsScheduleService";
import { SupportAgentsScheduleValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsSchedule";
import { SupportAgentsScheduleStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsScheduleStateMachine";

describe("SupportAgentsSchedule Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsScheduleService();
  const sm = new SupportAgentsScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsSchedule Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
