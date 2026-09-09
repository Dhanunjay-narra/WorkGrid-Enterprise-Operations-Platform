export function generateIotFleetProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
