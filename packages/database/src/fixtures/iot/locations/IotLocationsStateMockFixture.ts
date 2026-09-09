export function generateIotLocationsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
