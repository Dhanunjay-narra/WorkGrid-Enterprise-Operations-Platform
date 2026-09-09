import { CommMentionRecordService } from "../../../services/core-engine/src/communication/services/CommMentionRecordService";
import { CommMentionRecordValidator } from "../../../packages/types/src/domains/communication/CommMentionRecord";

describe("CommMentionRecord Service & Validation Suite", () => {
  const service = new CommMentionRecordService();

  test("creates a valid CommMentionRecord record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommMentionRecord",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommMentionRecordValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
