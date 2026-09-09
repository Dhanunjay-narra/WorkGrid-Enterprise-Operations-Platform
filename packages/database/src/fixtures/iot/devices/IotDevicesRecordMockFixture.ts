export function generateIotDevicesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
