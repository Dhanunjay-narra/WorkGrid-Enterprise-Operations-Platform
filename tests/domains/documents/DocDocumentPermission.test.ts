import { DocDocumentPermissionService } from "../../../services/core-engine/src/documents/services/DocDocumentPermissionService";
import { DocDocumentPermissionValidator } from "../../../packages/types/src/domains/documents/DocDocumentPermission";

describe("DocDocumentPermission Service & Validation Suite", () => {
  const service = new DocDocumentPermissionService();

  test("creates a valid DocDocumentPermission record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocDocumentPermission",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocDocumentPermissionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
