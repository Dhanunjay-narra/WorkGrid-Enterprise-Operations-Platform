import { AiToolCallRecordService } from "../../../services/core-engine/src/ai/services/AiToolCallRecordService";
import { AiToolCallRecordValidator } from "../../../packages/types/src/domains/ai/AiToolCallRecord";

describe("AiToolCallRecord Service & Validation Suite", () => {
  const service = new AiToolCallRecordService();

  test("creates a valid AiToolCallRecord record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiToolCallRecord",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiToolCallRecordValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
