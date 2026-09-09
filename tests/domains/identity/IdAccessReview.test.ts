import { IdAccessReviewService } from "../../../services/core-engine/src/identity/services/IdAccessReviewService";
import { IdAccessReviewValidator } from "../../../packages/types/src/domains/identity/IdAccessReview";

describe("IdAccessReview Service & Validation Suite", () => {
  const service = new IdAccessReviewService();

  test("creates a valid IdAccessReview record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdAccessReview",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdAccessReviewValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
