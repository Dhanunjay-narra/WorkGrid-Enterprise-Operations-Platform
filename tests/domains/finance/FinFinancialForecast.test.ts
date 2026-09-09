import { FinFinancialForecastService } from "../../../services/core-engine/src/finance/services/FinFinancialForecastService";
import { FinFinancialForecastValidator } from "../../../packages/types/src/domains/finance/FinFinancialForecast";

describe("FinFinancialForecast Service & Validation Suite", () => {
  const service = new FinFinancialForecastService();

  test("creates a valid FinFinancialForecast record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinFinancialForecast",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinFinancialForecastValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
