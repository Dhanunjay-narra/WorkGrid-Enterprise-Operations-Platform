import { IdDirectorySyncService } from "../../../services/core-engine/src/identity/services/IdDirectorySyncService";
import { IdDirectorySyncValidator } from "../../../packages/types/src/domains/identity/IdDirectorySync";

describe("IdDirectorySync Service & Validation Suite", () => {
  const service = new IdDirectorySyncService();

  test("creates a valid IdDirectorySync record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdDirectorySync",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdDirectorySyncValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
