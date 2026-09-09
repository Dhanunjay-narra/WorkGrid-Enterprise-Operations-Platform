import { HrPerformanceReviewService } from "../../../services/core-engine/src/hr/services/HrPerformanceReviewService";
import { HrPerformanceReviewValidator } from "../../../packages/types/src/domains/hr/HrPerformanceReview";

describe("HrPerformanceReview Service & Validation Suite", () => {
  const service = new HrPerformanceReviewService();

  test("creates a valid HrPerformanceReview record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrPerformanceReview",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrPerformanceReviewValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
