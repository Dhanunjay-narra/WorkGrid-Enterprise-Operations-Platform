import { BiExecutiveSummaryService } from "../../../services/core-engine/src/analytics/services/BiExecutiveSummaryService";
import { BiExecutiveSummaryValidator } from "../../../packages/types/src/domains/analytics/BiExecutiveSummary";

describe("BiExecutiveSummary Service & Validation Suite", () => {
  const service = new BiExecutiveSummaryService();

  test("creates a valid BiExecutiveSummary record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiExecutiveSummary",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiExecutiveSummaryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
