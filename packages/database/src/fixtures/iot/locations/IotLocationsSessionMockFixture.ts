export function generateIotLocationsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
