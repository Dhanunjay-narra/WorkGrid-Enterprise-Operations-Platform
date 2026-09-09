import { AiToolsPayloadService } from "../../../services/core-engine/src/ai/tools/services/AiToolsPayloadService";
import { AiToolsPayloadValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsPayload";
import { AiToolsPayloadStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsPayloadStateMachine";

describe("AiToolsPayload Comprehensive Domain Test Suite", () => {
  const service = new AiToolsPayloadService();
  const sm = new AiToolsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsPayload Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
