import { DocMetadataTagService } from "../../../services/core-engine/src/documents/services/DocMetadataTagService";
import { DocMetadataTagValidator } from "../../../packages/types/src/domains/documents/DocMetadataTag";

describe("DocMetadataTag Service & Validation Suite", () => {
  const service = new DocMetadataTagService();

  test("creates a valid DocMetadataTag record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocMetadataTag",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocMetadataTagValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
