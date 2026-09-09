import { AiRagReportService } from "../../../services/core-engine/src/ai/rag/services/AiRagReportService";
import { AiRagReportValidator } from "../../../packages/types/src/domains/ai/rag/AiRagReport";
import { AiRagReportStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagReportStateMachine";

describe("AiRagReport Comprehensive Domain Test Suite", () => {
  const service = new AiRagReportService();
  const sm = new AiRagReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagReport Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
