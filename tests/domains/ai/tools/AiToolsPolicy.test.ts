import { AiToolsPolicyService } from "../../../services/core-engine/src/ai/tools/services/AiToolsPolicyService";
import { AiToolsPolicyValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsPolicy";
import { AiToolsPolicyStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsPolicyStateMachine";

describe("AiToolsPolicy Comprehensive Domain Test Suite", () => {
  const service = new AiToolsPolicyService();
  const sm = new AiToolsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsPolicy Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
