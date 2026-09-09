import { AiToolsNodeService } from "../../../services/core-engine/src/ai/tools/services/AiToolsNodeService";
import { AiToolsNodeValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsNode";
import { AiToolsNodeStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsNodeStateMachine";

describe("AiToolsNode Comprehensive Domain Test Suite", () => {
  const service = new AiToolsNodeService();
  const sm = new AiToolsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsNode Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
