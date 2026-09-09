import { DocDocumentVersionService } from "../../../services/core-engine/src/documents/services/DocDocumentVersionService";
import { DocDocumentVersionValidator } from "../../../packages/types/src/domains/documents/DocDocumentVersion";

describe("DocDocumentVersion Service & Validation Suite", () => {
  const service = new DocDocumentVersionService();

  test("creates a valid DocDocumentVersion record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocDocumentVersion",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocDocumentVersionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
