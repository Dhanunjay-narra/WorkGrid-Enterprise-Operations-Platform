export function generateIotLocationsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
