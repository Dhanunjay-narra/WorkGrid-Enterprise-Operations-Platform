export function generateIotFleetPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
