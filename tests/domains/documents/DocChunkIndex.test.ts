import { DocChunkIndexService } from "../../../services/core-engine/src/documents/services/DocChunkIndexService";
import { DocChunkIndexValidator } from "../../../packages/types/src/domains/documents/DocChunkIndex";

describe("DocChunkIndex Service & Validation Suite", () => {
  const service = new DocChunkIndexService();

  test("creates a valid DocChunkIndex record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocChunkIndex",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocChunkIndexValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
