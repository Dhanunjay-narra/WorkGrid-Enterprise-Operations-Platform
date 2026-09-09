import { DocStorageBucketService } from "../../../services/core-engine/src/documents/services/DocStorageBucketService";
import { DocStorageBucketValidator } from "../../../packages/types/src/domains/documents/DocStorageBucket";

describe("DocStorageBucket Service & Validation Suite", () => {
  const service = new DocStorageBucketService();

  test("creates a valid DocStorageBucket record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocStorageBucket",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocStorageBucketValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
