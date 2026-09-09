import { FinFiscalYearService } from "../../../services/core-engine/src/finance/services/FinFiscalYearService";
import { FinFiscalYearValidator } from "../../../packages/types/src/domains/finance/FinFiscalYear";

describe("FinFiscalYear Service & Validation Suite", () => {
  const service = new FinFiscalYearService();

  test("creates a valid FinFiscalYear record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinFiscalYear",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinFiscalYearValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
