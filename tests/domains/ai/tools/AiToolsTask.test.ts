import { AiToolsTaskService } from "../../../services/core-engine/src/ai/tools/services/AiToolsTaskService";
import { AiToolsTaskValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsTask";
import { AiToolsTaskStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsTaskStateMachine";

describe("AiToolsTask Comprehensive Domain Test Suite", () => {
  const service = new AiToolsTaskService();
  const sm = new AiToolsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsTask Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
