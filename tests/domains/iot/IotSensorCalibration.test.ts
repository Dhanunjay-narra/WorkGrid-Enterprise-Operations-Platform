import { IotSensorCalibrationService } from "../../../services/core-engine/src/iot/services/IotSensorCalibrationService";
import { IotSensorCalibrationValidator } from "../../../packages/types/src/domains/iot/IotSensorCalibration";

describe("IotSensorCalibration Service & Validation Suite", () => {
  const service = new IotSensorCalibrationService();

  test("creates a valid IotSensorCalibration record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IotSensorCalibration",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IotSensorCalibrationValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
