import { SupArticleCategoryService } from "../../../services/core-engine/src/support/services/SupArticleCategoryService";
import { SupArticleCategoryValidator } from "../../../packages/types/src/domains/support/SupArticleCategory";

describe("SupArticleCategory Service & Validation Suite", () => {
  const service = new SupArticleCategoryService();

  test("creates a valid SupArticleCategory record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupArticleCategory",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupArticleCategoryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
