export function generateIotLocationsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
