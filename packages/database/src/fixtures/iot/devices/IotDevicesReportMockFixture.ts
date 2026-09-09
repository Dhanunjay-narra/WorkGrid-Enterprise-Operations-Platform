export function generateIotDevicesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
