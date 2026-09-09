import { AiAgentExecutionLogService } from "../../../services/core-engine/src/ai/services/AiAgentExecutionLogService";
import { AiAgentExecutionLogValidator } from "../../../packages/types/src/domains/ai/AiAgentExecutionLog";

describe("AiAgentExecutionLog Service & Validation Suite", () => {
  const service = new AiAgentExecutionLogService();

  test("creates a valid AiAgentExecutionLog record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiAgentExecutionLog",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiAgentExecutionLogValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
