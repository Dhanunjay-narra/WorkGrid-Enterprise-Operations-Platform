export function generateIotFleetNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
