export function generateIotLocationsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
