import { FinPaymentTransactionService } from "../../../services/core-engine/src/finance/services/FinPaymentTransactionService";
import { FinPaymentTransactionValidator } from "../../../packages/types/src/domains/finance/FinPaymentTransaction";

describe("FinPaymentTransaction Service & Validation Suite", () => {
  const service = new FinPaymentTransactionService();

  test("creates a valid FinPaymentTransaction record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinPaymentTransaction",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinPaymentTransactionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
