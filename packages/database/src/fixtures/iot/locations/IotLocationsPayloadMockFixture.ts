export function generateIotLocationsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
