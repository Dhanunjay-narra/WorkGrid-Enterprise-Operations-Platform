import { FinRefundRecordService } from "../../../services/core-engine/src/finance/services/FinRefundRecordService";
import { FinRefundRecordValidator } from "../../../packages/types/src/domains/finance/FinRefundRecord";

describe("FinRefundRecord Service & Validation Suite", () => {
  const service = new FinRefundRecordService();

  test("creates a valid FinRefundRecord record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinRefundRecord",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinRefundRecordValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
