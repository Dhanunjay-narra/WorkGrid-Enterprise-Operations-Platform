import { FinFxRateHistoryService } from "../../../services/core-engine/src/finance/services/FinFxRateHistoryService";
import { FinFxRateHistoryValidator } from "../../../packages/types/src/domains/finance/FinFxRateHistory";

describe("FinFxRateHistory Service & Validation Suite", () => {
  const service = new FinFxRateHistoryService();

  test("creates a valid FinFxRateHistory record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinFxRateHistory",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinFxRateHistoryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
