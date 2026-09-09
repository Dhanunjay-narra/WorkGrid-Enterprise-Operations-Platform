export function generateIotFleetMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
