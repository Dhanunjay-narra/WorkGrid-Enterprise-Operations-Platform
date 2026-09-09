import { DocFolderService } from "../../../services/core-engine/src/documents/services/DocFolderService";
import { DocFolderValidator } from "../../../packages/types/src/domains/documents/DocFolder";

describe("DocFolder Service & Validation Suite", () => {
  const service = new DocFolderService();

  test("creates a valid DocFolder record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocFolder",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocFolderValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
