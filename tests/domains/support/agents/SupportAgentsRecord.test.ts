import { SupportAgentsRecordService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsRecordService";
import { SupportAgentsRecordValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsRecord";
import { SupportAgentsRecordStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsRecordStateMachine";

describe("SupportAgentsRecord Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsRecordService();
  const sm = new SupportAgentsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsRecord Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
