export function generateIotDevicesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
