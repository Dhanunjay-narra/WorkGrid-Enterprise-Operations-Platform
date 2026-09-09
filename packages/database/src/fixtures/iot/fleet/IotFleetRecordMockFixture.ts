export function generateIotFleetRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
