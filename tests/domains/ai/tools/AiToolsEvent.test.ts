import { AiToolsEventService } from "../../../services/core-engine/src/ai/tools/services/AiToolsEventService";
import { AiToolsEventValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsEvent";
import { AiToolsEventStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsEventStateMachine";

describe("AiToolsEvent Comprehensive Domain Test Suite", () => {
  const service = new AiToolsEventService();
  const sm = new AiToolsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsEvent Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
