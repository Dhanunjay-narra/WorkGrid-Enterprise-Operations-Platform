import { IotFirmwareVersionService } from "../../../services/core-engine/src/iot/services/IotFirmwareVersionService";
import { IotFirmwareVersionValidator } from "../../../packages/types/src/domains/iot/IotFirmwareVersion";

describe("IotFirmwareVersion Service & Validation Suite", () => {
  const service = new IotFirmwareVersionService();

  test("creates a valid IotFirmwareVersion record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IotFirmwareVersion",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IotFirmwareVersionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
