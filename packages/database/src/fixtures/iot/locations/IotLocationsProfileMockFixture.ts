export function generateIotLocationsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
