import { DocTemplateDocumentService } from "../../../services/core-engine/src/documents/services/DocTemplateDocumentService";
import { DocTemplateDocumentValidator } from "../../../packages/types/src/domains/documents/DocTemplateDocument";

describe("DocTemplateDocument Service & Validation Suite", () => {
  const service = new DocTemplateDocumentService();

  test("creates a valid DocTemplateDocument record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocTemplateDocument",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocTemplateDocumentValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
