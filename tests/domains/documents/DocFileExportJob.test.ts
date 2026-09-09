import { DocFileExportJobService } from "../../../services/core-engine/src/documents/services/DocFileExportJobService";
import { DocFileExportJobValidator } from "../../../packages/types/src/domains/documents/DocFileExportJob";

describe("DocFileExportJob Service & Validation Suite", () => {
  const service = new DocFileExportJobService();

  test("creates a valid DocFileExportJob record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocFileExportJob",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocFileExportJobValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
