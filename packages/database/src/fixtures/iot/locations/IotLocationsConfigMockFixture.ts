export function generateIotLocationsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
