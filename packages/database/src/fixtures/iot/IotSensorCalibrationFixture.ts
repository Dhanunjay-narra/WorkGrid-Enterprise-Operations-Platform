export function createIotSensorCalibrationFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "iot_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-IOT",
    name: "IotSensorCalibration Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
