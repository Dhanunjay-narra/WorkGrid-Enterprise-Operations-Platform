import { DocDocumentFileService } from "../../../services/core-engine/src/documents/services/DocDocumentFileService";
import { DocDocumentFileValidator } from "../../../packages/types/src/domains/documents/DocDocumentFile";

describe("DocDocumentFile Service & Validation Suite", () => {
  const service = new DocDocumentFileService();

  test("creates a valid DocDocumentFile record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocDocumentFile",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocDocumentFileValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
