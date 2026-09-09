export function generateIotDevicesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
