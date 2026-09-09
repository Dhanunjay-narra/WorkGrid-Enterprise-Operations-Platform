import { DocOcrExtractedDataService } from "../../../services/core-engine/src/documents/services/DocOcrExtractedDataService";
import { DocOcrExtractedDataValidator } from "../../../packages/types/src/domains/documents/DocOcrExtractedData";

describe("DocOcrExtractedData Service & Validation Suite", () => {
  const service = new DocOcrExtractedDataService();

  test("creates a valid DocOcrExtractedData record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocOcrExtractedData",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocOcrExtractedDataValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
