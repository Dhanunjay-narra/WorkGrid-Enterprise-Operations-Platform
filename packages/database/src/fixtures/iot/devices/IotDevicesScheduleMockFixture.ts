export function generateIotDevicesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
