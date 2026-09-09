export function generateIotLocationsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
