export function generateIotLocationsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
