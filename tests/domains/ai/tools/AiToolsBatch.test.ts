import { AiToolsBatchService } from "../../../services/core-engine/src/ai/tools/services/AiToolsBatchService";
import { AiToolsBatchValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsBatch";
import { AiToolsBatchStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsBatchStateMachine";

describe("AiToolsBatch Comprehensive Domain Test Suite", () => {
  const service = new AiToolsBatchService();
  const sm = new AiToolsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsBatch Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
