import { AiPromptTemplateService } from "../../../services/core-engine/src/ai/services/AiPromptTemplateService";
import { AiPromptTemplateValidator } from "../../../packages/types/src/domains/ai/AiPromptTemplate";

describe("AiPromptTemplate Service & Validation Suite", () => {
  const service = new AiPromptTemplateService();

  test("creates a valid AiPromptTemplate record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiPromptTemplate",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiPromptTemplateValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
