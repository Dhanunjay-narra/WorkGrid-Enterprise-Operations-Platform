import { AiTokenUsageRecordService } from "../../../services/core-engine/src/ai/services/AiTokenUsageRecordService";
import { AiTokenUsageRecordValidator } from "../../../packages/types/src/domains/ai/AiTokenUsageRecord";

describe("AiTokenUsageRecord Service & Validation Suite", () => {
  const service = new AiTokenUsageRecordService();

  test("creates a valid AiTokenUsageRecord record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiTokenUsageRecord",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiTokenUsageRecordValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
