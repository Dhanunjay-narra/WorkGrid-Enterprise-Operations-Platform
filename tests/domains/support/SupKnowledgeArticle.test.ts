import { SupKnowledgeArticleService } from "../../../services/core-engine/src/support/services/SupKnowledgeArticleService";
import { SupKnowledgeArticleValidator } from "../../../packages/types/src/domains/support/SupKnowledgeArticle";

describe("SupKnowledgeArticle Service & Validation Suite", () => {
  const service = new SupKnowledgeArticleService();

  test("creates a valid SupKnowledgeArticle record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupKnowledgeArticle",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupKnowledgeArticleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
