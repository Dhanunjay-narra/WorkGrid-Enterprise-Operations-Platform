import { IdDeviceService } from "../../../services/core-engine/src/identity/services/IdDeviceService";
import { IdDeviceValidator } from "../../../packages/types/src/domains/identity/IdDevice";

describe("IdDevice Service & Validation Suite", () => {
  const service = new IdDeviceService();

  test("creates a valid IdDevice record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdDevice",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdDeviceValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
