export function generateIotFleetSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
