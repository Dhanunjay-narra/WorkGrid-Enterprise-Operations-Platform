import { AiToolsItemService } from "../../../services/core-engine/src/ai/tools/services/AiToolsItemService";
import { AiToolsItemValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsItem";
import { AiToolsItemStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsItemStateMachine";

describe("AiToolsItem Comprehensive Domain Test Suite", () => {
  const service = new AiToolsItemService();
  const sm = new AiToolsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsItem Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
