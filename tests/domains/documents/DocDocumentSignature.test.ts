import { DocDocumentSignatureService } from "../../../services/core-engine/src/documents/services/DocDocumentSignatureService";
import { DocDocumentSignatureValidator } from "../../../packages/types/src/domains/documents/DocDocumentSignature";

describe("DocDocumentSignature Service & Validation Suite", () => {
  const service = new DocDocumentSignatureService();

  test("creates a valid DocDocumentSignature record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocDocumentSignature",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocDocumentSignatureValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
