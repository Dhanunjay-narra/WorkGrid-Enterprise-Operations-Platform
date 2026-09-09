export function generateIotFleetEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
