import { BiReportQueryService } from "../../../services/core-engine/src/analytics/services/BiReportQueryService";
import { BiReportQueryValidator } from "../../../packages/types/src/domains/analytics/BiReportQuery";

describe("BiReportQuery Service & Validation Suite", () => {
  const service = new BiReportQueryService();

  test("creates a valid BiReportQuery record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiReportQuery",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiReportQueryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
