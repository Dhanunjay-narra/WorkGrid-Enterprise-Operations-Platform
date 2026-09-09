import { AiToolsSnapshotService } from "../../../services/core-engine/src/ai/tools/services/AiToolsSnapshotService";
import { AiToolsSnapshotValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsSnapshot";
import { AiToolsSnapshotStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsSnapshotStateMachine";

describe("AiToolsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new AiToolsSnapshotService();
  const sm = new AiToolsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsSnapshot Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
