import { AiToolsMappingService } from "../../../services/core-engine/src/ai/tools/services/AiToolsMappingService";
import { AiToolsMappingValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsMapping";
import { AiToolsMappingStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsMappingStateMachine";

describe("AiToolsMapping Comprehensive Domain Test Suite", () => {
  const service = new AiToolsMappingService();
  const sm = new AiToolsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsMapping Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
