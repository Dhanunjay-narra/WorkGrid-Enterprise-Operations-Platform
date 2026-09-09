import { FinBankReconciliationService } from "../../../services/core-engine/src/finance/services/FinBankReconciliationService";
import { FinBankReconciliationValidator } from "../../../packages/types/src/domains/finance/FinBankReconciliation";

describe("FinBankReconciliation Service & Validation Suite", () => {
  const service = new FinBankReconciliationService();

  test("creates a valid FinBankReconciliation record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinBankReconciliation",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinBankReconciliationValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
