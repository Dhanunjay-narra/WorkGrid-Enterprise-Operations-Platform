import { DocAccessLogService } from "../../../services/core-engine/src/documents/services/DocAccessLogService";
import { DocAccessLogValidator } from "../../../packages/types/src/domains/documents/DocAccessLog";

describe("DocAccessLog Service & Validation Suite", () => {
  const service = new DocAccessLogService();

  test("creates a valid DocAccessLog record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocAccessLog",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocAccessLogValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
