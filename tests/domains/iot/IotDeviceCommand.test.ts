import { IotDeviceCommandService } from "../../../services/core-engine/src/iot/services/IotDeviceCommandService";
import { IotDeviceCommandValidator } from "../../../packages/types/src/domains/iot/IotDeviceCommand";

describe("IotDeviceCommand Service & Validation Suite", () => {
  const service = new IotDeviceCommandService();

  test("creates a valid IotDeviceCommand record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IotDeviceCommand",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IotDeviceCommandValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
