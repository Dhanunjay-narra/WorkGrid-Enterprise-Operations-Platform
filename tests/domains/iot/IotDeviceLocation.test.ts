import { IotDeviceLocationService } from "../../../services/core-engine/src/iot/services/IotDeviceLocationService";
import { IotDeviceLocationValidator } from "../../../packages/types/src/domains/iot/IotDeviceLocation";

describe("IotDeviceLocation Service & Validation Suite", () => {
  const service = new IotDeviceLocationService();

  test("creates a valid IotDeviceLocation record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IotDeviceLocation",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IotDeviceLocationValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
