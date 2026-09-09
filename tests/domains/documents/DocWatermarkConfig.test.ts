import { DocWatermarkConfigService } from "../../../services/core-engine/src/documents/services/DocWatermarkConfigService";
import { DocWatermarkConfigValidator } from "../../../packages/types/src/domains/documents/DocWatermarkConfig";

describe("DocWatermarkConfig Service & Validation Suite", () => {
  const service = new DocWatermarkConfigService();

  test("creates a valid DocWatermarkConfig record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocWatermarkConfig",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocWatermarkConfigValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
