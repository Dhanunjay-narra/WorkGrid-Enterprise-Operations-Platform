export function generateIotDevicesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
