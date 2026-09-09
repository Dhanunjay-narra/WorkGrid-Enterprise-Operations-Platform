import { FinExpenseReceiptService } from "../../../services/core-engine/src/finance/services/FinExpenseReceiptService";
import { FinExpenseReceiptValidator } from "../../../packages/types/src/domains/finance/FinExpenseReceipt";

describe("FinExpenseReceipt Service & Validation Suite", () => {
  const service = new FinExpenseReceiptService();

  test("creates a valid FinExpenseReceipt record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinExpenseReceipt",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinExpenseReceiptValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
