export function generateIotDevicesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
