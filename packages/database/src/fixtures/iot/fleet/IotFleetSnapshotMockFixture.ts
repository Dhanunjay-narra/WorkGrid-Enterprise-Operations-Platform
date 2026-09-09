export function generateIotFleetSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
