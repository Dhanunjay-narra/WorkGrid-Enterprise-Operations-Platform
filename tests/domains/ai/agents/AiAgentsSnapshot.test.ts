import { AiAgentsSnapshotService } from "../../../services/core-engine/src/ai/agents/services/AiAgentsSnapshotService";
import { AiAgentsSnapshotValidator } from "../../../packages/types/src/domains/ai/agents/AiAgentsSnapshot";
import { AiAgentsSnapshotStateMachine } from "../../../services/core-engine/src/ai/agents/state-machines/AiAgentsSnapshotStateMachine";

describe("AiAgentsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new AiAgentsSnapshotService();
  const sm = new AiAgentsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiAgentsSnapshot Instance",
      domain: "ai_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiAgentsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
